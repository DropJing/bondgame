	var loadlevel = function(game,n) {
		var n = n-1
		var level = levels[n]
		var blocks = []
		for (var i = 0; i < level.length; i++) {
			var p = level[i]
			var b =  Block(game,p)
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
			var imagepaths = {
				block : 'images/block.png',
				ball : 'images/qiu.png ',
				bond : 'images/bond.png',
			}

			var game = Game( 10 , imagepaths , function(game){
				
				var bond = Bond(game)	
				var ball = Ball(game)	
				var blocks = loadlevel(game,1)
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
        			blocks = loadlevel(game,Number(key))
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
			//鼠标拖拽
			var enableDrag = false
			window.addEventListener('mousedown',function (event){
				var x = event.offsetX
				var y = event.offsetY
				log(x,y,'down')
				if (ball.hasPoint(x,y)) {
					enableDrag = true
				}

			})
			window.addEventListener('mousemove',function (event){
				var x = event.offsetX
				var y = event.offsetY
			//log(x,y,'move')
			if(enableDrag) {
				log(x,y,'move')
				ball.x = x
				ball.y = y
			}

		})
			window.addEventListener('mouseup',function (event){
				var x = event.offsetX
				var y = event.offsetY
				log(x,y,'up')
				enableDrag = false

			})
			//draw

			game.draw=function() {
				//draw fillrect 填充矩形的意思
				game.context.fillStyle = "#554"
				game.context.fillRect(0,0,800,800);
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

		})

		}
		__main()