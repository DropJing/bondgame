	var loadlevel = function(n) {
		var n = n-1
		var level = levels[n]
		var blocks = []
		for (var i = 0; i < level.length; i++) {
			var p = level[i]
			var b =  Block(p)
			blocks.push(b)
		}
		return blocks
	}
		//control speed
		document.querySelector('#id-input-speed').addEventListener('input',function() {
			var input = event.target
			window.fps = Number(input.value)
		})	
		
		var __main=function() {
			var game = Game(10)
			var bond = Bond()	
			var ball = Ball()	
			var blocks = loadlevel(1)
        	var pausd = false//控制暂停的参数
        	var score = 0


        	game.registerAction('a',function() {
        		bond.moveLeft()
        	})
        	game.registerAction('d',function() {
        		bond.moveRight()
        	})
        	game.registerAction('f',function() {
        		ball.fire()
        	})
        	window.addEventListener('keyup',function(event){
        		var key =  event.key
        		if(key == 'p') {
        			pausd = !pausd
        		}
        		else if ('1234567'.includes(key) ) {
        			blocks = loadlevel(Number(key))
        		}
        	})

			//update
			game.update=function() {
				if (pausd) {
					return 
				}
				ball.move()
				//板子和球的相撞
				if(bond.collide(ball)){
					ball.speedY=-ball.speedY
				}
				//球和砖的相撞
				for (var i = 0; i < blocks.length; i++) {
					var block = blocks[i]
					if (block.collide(ball)) {
						ball.speedY=-ball.speedY
						ball.speedX=-ball.speedX
						score += 100
						block.kill()
					}
				}
			}
			//draw

			game.draw=function() {
				game.drawImage(bond)
				game.drawImage(ball)
				for (var i = 0; i < blocks.length; i++) {
					var block = blocks[i]
					if(block.alive) {
						game.drawImage(block)
					}
				}
				// draw Text
				game.context.fillText(  "Score : " + score, 10,790);
			}
		}
		__main()