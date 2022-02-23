<template>
	<div id="app">
		<div class="bar-wrap">			
			<div class="bar" :style="`width: ${percentage}%`">
				<div class="left">
					<span class="number">{{current}}</span>
					<span>Followers</span>
					
				</div>
				<span class="right number" v-bind:class="{ over: (percentage > 85 && percentage <= 92), almost: (percentage >= 92 && percentage < 100), done: percent >= 100 }">{{ticker_percentage}}%</span>				
			</div>	 		
			<div class="remaining" :style="`width: ${percentage_remaining}%`" v-bind:class="{ over: (percentage_remaining < 32), fadeIn: (percentage_remaining < 50), fadeOuts: (percentage_remaining == 100) }">
				<span v-show="percentage_remaining > 0" class="number">{{remaining}}</span>
				<span v-show="percentage_remaining > 0">to go!</span>
				<span v-show="percentage_remaining <= 0">Thank You!</span>				
			</div>
			<div class="goal" v-bind:class="{fadeIn: percentage_remaining > 0, fadeOut: percentage_remaining <= 0}">				
				<span>Goal</span> <span class="number">{{goal}}</span>
			</div>			
					
		</div>		
		<!-- <div>
			<iframe style="width: 100%; border: 0; padding-top: 40px" src="https://streamelements.com/overlay/61ca45f8cec1a06d7262f7a5/AcoTvkgwbUf7nlkoAQ97hCS92lCXEybd8AFxb1XkdacTZ1Sz"></iframe>
		</div> -->
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
				url: "https://192.168.100.91:1880/follower/goal/data"
			}
		},
		mounted () {
			let $this = this
			let date_format = 'MMM D, YY'			
				
			let now = moment("tuesday").format(date_format)
			console.log(now)

			// let parameters_str = window.location.search
			// parameters_str = parameters_str.split('?')[1]
			// this.url = parameters_str.split("url=")[1]
			// console.log(this.url)

			this.getData()	
			setInterval(function(){
				$this.getData()			
			}, 9000)
			
			this.ws()				
		},
		methods: {
			getData() {			
				this.tickerDown(this.percentage, 20)
				this.percentage_remaining = 80
				this.percentage = 20
				// this.current = 0
				// this.goal = 0
				

				axios
				.get(this.url)
				.then(response => {
					let $this = this
					console.log(response)
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
				// current = current.toFixed(0)
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
				current = current.toFixed(0)

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
				let percent = ((this.current/this.goal)*100)
				if(!Number.isNaN(percent)){
					// this.percentage = percent.toFixed(2)	
					this.percentage = percent
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
@font-face {
	font-family: 'amuroregular';
    src: url('./assets/fonts/amuro-82yn-webfont.woff2') format('woff2'),
         url('./assets/fonts/amuro-82yn-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

.hidden {
	display: none;
}


#app {
	// font-family: Avenir, Helvetica, Arial, sans-serif;
	font-family: 'amuroregular';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;	
	color: #fff;		
	font-size: 25px;
}


.bar-wrap {
	font-family: 'amuroregular';
	position: relative;
	background: #232323;
	width: 750px;
	height: 54px;
	display: flex;
    justify-content: flex-end;
	border-radius: 10px;
    overflow: hidden;    
	box-shadow: 0px 1px 14px 2px rgba(0,0,0,0.46);
	-webkit-box-shadow: 0px 1px 14px 2px rgba(0,0,0,0.46);
	-moz-box-shadow: 0px 1px 14px 2px rgba(0,0,0,0.46);
	text-transform: uppercase;
	text-shadow: 0px 0px 4px rgba(0,0,0,0.62);

	.goal {
		display: flex;
		align-items: center;
		position: relative;
		z-index: 2;
		// background: #232323;
		padding-right: 10px;
		transition: opacity 2s ease-in-out;
		span {
			margin-right: 5px;
		}

		&.fadeIn {
			opacity: 1;
		}

		&.fadeOut {
			opacity: 0;
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
		background: r;

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
	padding: 9px 10px;
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
			padding-right: 3.5%;
		}

		&.almost {
			padding-right: 9.5%;
		}

		&.done {
			padding-right: 15px;
		}
	}
}


.number {
	font-size: 1.1em;
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
