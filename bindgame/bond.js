var Bond=function(game){
	var image = game.imageByname('bond')
	var o ={
		image: image,
		x:  200,
		y: 700,
		speed:  10,
	}
	o.image = image.image
	o.width = image.w
	o.height = image.h
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
				return rectIntersects(ball,o)
			}
			return o
		}