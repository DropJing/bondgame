var Ball=function(){
			var image=imageFrompPath('images/qiu.png')
			var o={
				image: image,
				x:  400,
				y: 650,
				speedX: 5,
				speedY:5, 
				fired: false,
			}
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
				o.fired=true
			}


			return o
		}