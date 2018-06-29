var Game=function(fps,imagepaths,runCallBack) {
	//imagepaths 是一个对象，存储图片引用还有路径
	var g={
		actions: {},
		keydowns: {},
		images :{},
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
			setTimeout(function() {
				runloop()
			}, window.fps)

			var runloop = function() {
               	//update event
               	var actions = Object.keys(g.actions)

               	for (var i = 0; i <actions.length; i++) {
               		var key=actions[i]
               		if(g.keydowns[key])
               			g.actions[key]()
               	}
				//clare
				context.clearRect(0,0,canvas.width,canvas.height)
				log()
				g.update()

				//draw
				g.draw()

				setTimeout(function() {
					runloop()
				}, window.fps)

			}
			var loads = []
            	//图像下标数组
            	var names = Object.keys(imagepaths)
                //运行前载入图片
                for (var i=0 ; i < names.length ; i++) {
                	let name = names[i]
                	var imagePath = imagepaths[name]
                	let img = new Image()
                	img.src = imagePath
                	img.onload = function() {
                		loads.push(1)
                		g.images[name] = img
                		if (loads.length == names.length) {
                			g.run()
                		}
                	}
                }

                g.imageByname = function(name) {
                	var img = g.images[name]
                	var image = {
                		image : img,
                		w: img.width,
                		h: img.height,
                	}
                	return image
                }
            //timer
            
            g.run = function() {
            	runCallBack(g)
            	setTimeout(function() {
            		runloop()
            	}, window.fps)
            }
            return g;
        }