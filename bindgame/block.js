var Block=function(){
			var image=imageFrompPath('images/block.png')

			var o={
				image: image,
				x: 100,
				y: 100,
				width: 47,
				height: 43,
				alive: true
			}
			o.kill = function() {
				o.alive = false
			}
			o.collide = function(ball) {
				if(o.alive) {
					if (rectIntersects(o,ball)||rectIntersects(ball,o) ) {
						return true
					}
				}
			}
			return o
		}