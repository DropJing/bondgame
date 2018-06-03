var Ball=function(game){
			var image = game.imageByname('ball')
			var o={
				image: image,
				x:  400,
				y: 650,
				speedX: 5,
				speedY:5, 
				fired: false,
			}
			o.image = image.image
	        o.width = image.w
	        o.height = image.h
			o.move=function(){	
				if(o.fired) {
					if(o.x<0||o.x+o.image.width>800)
					{
						o.speedX=-o.speedX
					}
					if(o.y<0||o.y+o.image.height>800)
					{
						o.speedY=-o.speedY
					}

					o.x+=o.speedX
					o.y+=o.speedY
				}

			}
			o.fire=function() {
                log(o.fired)
				o.fired=true
			}

       o.hasPoint = function(x,y) {
         var xIN = x >= o.x && x <= o.x + o.width
         var yIN = y >= o.y && y <= o.y + o.height
         return xIN && yIN
       }
       			return o
		}