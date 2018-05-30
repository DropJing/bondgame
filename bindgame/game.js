var Game=function(fps) {
	var g={
		actions: {},
		keydowns: {},
	}
	var canvas=document.querySelector('#id-canvas')
	var context=canvas.getContext('2d')

	g.canvas=canvas
	g.context=context
	context.font = "24px serif";

	g.drawImage=function(Image) {
		g.context.drawImage(Image.image,Image.x,Image.y)
	}
			//event
			window.addEventListener('keydown',function(event){
				g.keydowns[event.key]=true
			})
			window.addEventListener('keyup',function(event){
				g.keydowns[event.key]=false
			})
			
			g.registerAction=function(key,callback){
				g.actions[key]=callback
			}
			window.fps = 30
			var runloop = function() {
            	//update event
            	var actions=Object.keys(g.actions)

            	for (var i = 0; i <actions.length; i++) {
            		var key=actions[i]
            		if(g.keydowns[key])
            			g.actions[key]()
            	}
				//clare
				context.clearRect(0,0,canvas.width,canvas.height)
				g.update()
				//draw
				g.draw()
				setTimeout(function() {
					runloop()
				}, window.fps)
			}
            //timer
            setTimeout(function() {

            	runloop()
            	
            }, fps)
            return g;
        }