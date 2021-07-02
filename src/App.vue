<template>
	<div id="app">
		<div class="bar-wrap">			
			<div class="bar" :style="`width: ${percentage}%`">
				<div class="left">
					<span class="number">{{current}}</span>
					<span>Followers</span>
				</div>
				<span class="right number" v-bind:class="{ over: (percentage > 94) }">{{ticker_percentage}}%</span>				
			</div>	 		
			<div class="remaining" :style="`width: ${percentage_remaining}%`" v-bind:class="{ over: (percentage_remaining < 9), fadeIn: (percentage_remaining < 50), fadeOut: (percentage_remaining == 100) }">
				<span class="number">{{remaining}}</span>
				<span>to go!</span>
			</div>
			<div class="goal">				
				<span>Goal</span> <span class="number">{{goal}}</span>
			</div>			
					
		</div>		
	</div>
</template>

<script>
	import axios from 'axios'
	import * as moment from "moment/moment"	

	export default {
		name: 'App',
		data () {
			return {				
				end_date: null,
				current: 0,
				goal: 0,
				percentage: 0,
				remaining: 0,
				percentage_remaining: 100,			
				ticker_percentage: 0,
				url: null
			}
		},
		mounted () {
			let $this = this
			let date_format = 'MMM D, YY'			
				
			let now = moment("tuesday").format(date_format)
			console.log(now)

			let parameters_str = window.location.search
			parameters_str = parameters_str.split('?')[1]
			this.url = parameters_str.split("url=")[1]
			console.log(this.url)

			this.getData()	
			setInterval(function(){
				$this.getData()			
			}, 9000)
			
			this.ws()				
		},
		methods: {
			getData() {			
				this.tickerDown(this.percentage, 0)
				this.percentage_remaining = 80
				this.percentage = 20
				// this.current = 0
				// this.goal = 0
				

				axios
				.get(this.url)
				.then(response => {
					let $this = this
					setTimeout(function(){
						let data = response.data						
						$this.current = data.current
						$this.goal = data.goal			
						$this.update_percentage()			
					}, 2000)
				})								
			},
			tickerUp(current, max) {			
				let $this = this				

				let timer = setInterval(function(){
					if (current <= max) {
						$this.ticker_percentage = current++
					} else {
						clearTimeout(timer)
					}
				}, 20)
			},
			tickerDown(current, max) {			
				let $this = this				

				let timer = setInterval(function(){
					if (current >= max) {
						$this.ticker_percentage = current--
					} else {
						clearTimeout(timer)
					}
				}, 20)
			},
			ws: function () {
				let $this = this
				
				console.log("Connecting to monty WebSocket Server")			
				this.connection = new WebSocket('ws://localhost:1880/follow_event')

				setInterval(function(){
					if ($this.connection.readyState == 3) {
						console.log('reloading')
						location.reload()
					}
				}, 5000)


				this.connection.onmessage = function(event) {
					let data = JSON.parse(event.data)
					$this.current = data.current
					$this.goal = data.goal
					console.log(data)
				}

				this.connection.onopen = function() {				
					console.log("Successfully connected to monty websocket server...")
				}
			},
			update_percentage: function () {
				let percent = parseFloat(((this.current/this.goal)*100))	
				console.log(typeof percent)		
				if(!Number.isNaN(percent)){
					this.percentage = percent.toFixed(2)	
					this.remaining = this.goal - this.current					
					this.percentage_remaining = (100 - this.percentage) - 4
					this.tickerUp(0, this.percentage)
				} else {
					// this.current = 0
					// this.goal = 0
					this.percentage = 20
					this.percentage_remaining = 80		
					this.ticker_percentage = 0								
				}

			}
		},
		watch: {
			current() {
				this.update_percentage()
			},
			goal() {
				this.update_percentage()
			}
		}
	}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;	
	color: #fff;		
	font-size: 20px;
}


.bar-wrap {
	font-family: 'Front Page Neue';	
	position: relative;
	background: #232323;
	height: 54px;
	display: flex;
    justify-content: flex-end;
	border-radius: 10px;
    overflow: hidden;    

	.goal {
		display: flex;
		align-items: center;
		position: relative;
		z-index: 2;
		// background: #232323;
		padding-right: 10px;
		span {
			margin-right: 5px;
		}
	}

	.remaining {
		width: 33.33%;
		position: absolute;
		right: 0;
		width: 31.63%;
		height: 100%;
		display: flex;
		align-items: center;	
		transition: width 2s ease-in-out, opacity 2s ease-in-out;
		overflow: visible;
		z-index: 1;
		opacity: 0;

		box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
		transform: scale(1);
		animation: pulse 1.2s infinite;

		span {
			margin-right: 5px;
		}

		&.over {
			width: 100%!important;
			justify-content: center;
		}

		&.fadeIn {
			opacity: 1;
		}

		&.fadeOut {
			opacity: 0;
		}
	}
}

.bar {
	position: absolute;
	left: 0;
	top: 0;
	display: flex;
	justify-content: space-between;
	background-color: #7f00ce;
	padding: 10px;
	transition: width 2s;
	// background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background: linear-gradient(-45deg, #450059, #662e77, #ff9976, #ff784f);
	background-size: 400% 400%;
	animation: gradient 5s ease infinite;
	box-sizing: border-box;

	.left {
		padding-left: 10px;
		display: flex;
		align-items: center;

		span {
			margin-right: 5px;
		}
	}		

	.right {
		&.over {
			padding-right: 6%;
		}
	}
}


.number {
	font-size: 1.5em;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}


@keyframes pulse {
	0% {
		transform: scale(0.95);
		// box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	70% {
		transform: scale(1);
		// box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		// box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}
</style>
