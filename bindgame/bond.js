var Bond=function(){
			var image=imageFrompPath('images/bond.png')
			var o={
				image: image,
				x:  200,
				y: 700,
				speed:  10,
			}
			//控制边界
			o.movelimit = function(x) {
				if(o.x < 0) {
					x = 0
				}
				if (o.x > 800 - o.image.width ) {
					x = 800 - o.image.width
				}
				o.x = x
			}
			o.moveLeft=function(){
				o.movelimit(o.x - o.speed)
			}
			o.moveRight=function(){
				o.movelimit(o.x + o.speed)
			}
			o.collide=function(ball) {
				if(ball.y+ball.image.height>o.y) {
					if(ball.x>o.x && ball.x < o.x+o.image.width){
						return true
					}
				}
			}
			return o
		}