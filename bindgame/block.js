var Block=function(position){
	//position [0,0]
	var p = position
	var image=imageFrompPath('images/block.png')
	
	var o={
		image: image,
		x: p[0] ,
		y: p[1] ,
		width: 47,
		height: 43,
		alive: true,
		lifes: p[2] || 1 ,
	}
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