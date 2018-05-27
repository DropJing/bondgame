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