var Block=function(game,position){
	//position [0,0]
	var p = position
	var image = game.imageByname('block')
	
	var o={
		image: image,
		x: p[0] ,
		y: p[1] ,
		alive: true,
		lifes: p[2] || 1 ,
	}
	  o.image = image.image
	o.width = image.w
	o.height = image.h
	o.kill = function() {
		o.lifes--
		if (o.lifes <= 0) {
			o.alive = false
		}
		
	}
	o.collide = function(ball) {
		if(o.alive) {
			return rectIntersects(ball,o)
		}
	}
	return o
}