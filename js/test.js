// wrapper for our game "classes", "methods" and "objects"
	window.Game = {};

	// wrapper for "class" Rectangle
	(function(){
		function Rectangle(left, top, width, height){
			this.left = left || 0;
			this.top = top || 0;
            this.width = width || 0;
			this.height = height || 0;
			this.right = this.left + this.width;
			this.bottom = this.top + this.height;
		}

		Rectangle.prototype.set = function(left, top, /*optional*/width, /*optional*/height){
			this.left = left;
            this.top = top;
            this.width = width || this.width;
            this.height = height || this.height
            this.right = (this.left + this.width);
            this.bottom = (this.top + this.height);
		}

		Rectangle.prototype.within = function(r) {
			return (r.left <= this.left &&
					r.right >= this.right &&
					r.top <= this.top &&
					r.bottom >= this.bottom);
		}

		Rectangle.prototype.overlaps = function(r) {
			return (this.left < r.right &&
					r.left < this.right &&
					this.top < r.bottom &&
					r.top < this.bottom);
		}
		Game.Rectangle = Rectangle;
	})();
	(function(){
		var AXIS = {
			NONE: "none",
			HORIZONTAL: "horizontal",
			VERTICAL: "vertical",
			BOTH: "both"
		};




		function Camera(xView, yView, canvasWidth, canvasHeight, worldWidth, worldHeight)
		{
			this.xView = xView || 0;
			this.yView = yView || 0;
			this.xDeadZone = 0; // min distance to horizontal borders
			this.yDeadZone = 0; // min distance to vertical borders
			this.wView = canvasWidth;
			this.hView = canvasHeight;
			this.axis = AXIS.BOTH;
			this.followed = null;
			this.viewportRect = new Game.Rectangle(this.xView, this.yView, this.wView, this.hView);
			this.worldRect = new Game.Rectangle(0, 0, worldWidth, worldHeight);
		}
		Camera.prototype.follow = function(gameObject, xDeadZone, yDeadZone)
		{
			this.followed = gameObject;
			this.xDeadZone = xDeadZone;
			this.yDeadZone = yDeadZone;
		}

		Camera.prototype.update = function()
		{
			if(this.followed != null)
			{
				if(this.axis == AXIS.HORIZONTAL || this.axis == AXIS.BOTH)
				{
					if(this.followed.x - this.xView  + this.xDeadZone > this.wView)
						this.xView = this.followed.x - (this.wView - this.xDeadZone);
					else if(this.followed.x  - this.xDeadZone < this.xView)
						this.xView = this.followed.x  - this.xDeadZone;

				}
				if(this.axis == AXIS.VERTICAL || this.axis == AXIS.BOTH)
				{
					if(this.followed.y - this.yView + this.yDeadZone > this.hView)
						this.yView = this.followed.y - (this.hView - this.yDeadZone);
					else if(this.followed.y - this.yDeadZone < this.yView)
						this.yView = this.followed.y - this.yDeadZone;
				}

			}
			this.viewportRect.set(this.xView, this.yView);
			if(!this.viewportRect.within(this.worldRect))
			{
				if(this.viewportRect.left < this.worldRect.left)
					this.xView = this.worldRect.left;
				if(this.viewportRect.top < this.worldRect.top)
					this.yView = this.worldRect.top;
				if(this.viewportRect.right > this.worldRect.right)
					this.xView = this.worldRect.right - this.wView;
				if(this.viewportRect.bottom > this.worldRect.bottom)
					this.yView = this.worldRect.bottom - this.hView;
			}

		}

		Game.Camera = Camera;

	})();

	(function(){
		function Player(x, y){

			this.x = x;
			this.y = y;

			this.speed = 200;
			this.width = 50;
			this.height = 50;
		}

		Player.prototype.update = function(step, worldWidth, worldHeight){
			if(Game.controls.left)
				this.x -= this.speed * step;
			if(Game.controls.up)
				this.y -= this.speed * step;
			if(Game.controls.right)
				this.x += this.speed * step;
			if(Game.controls.down)
				this.y += this.speed * step;
			if(this.x - this.width/2 < 0){
				this.x = this.width/2;
			}
			if(this.y - this.height/2 < 0){
				this.y = this.height/2;
			}
			if(this.x + this.width/2 > worldWidth){
				this.x = worldWidth - this.width/2;
			}
			if(this.y + this.height/2 > worldHeight){
				this.y = worldHeight - this.height/2;
			}
		}

		Player.prototype.draw = function(context, xView, yView){
			context.save();
			context.fillStyle = "black";
			context.fillRect((this.x-this.width/2) - xView, (this.y-this.height/2) - yView, this.width, this.height);
			context.restore();
		}
		Game.Player = Player;

	})();
	(function(){
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
		var FPS = 30;
		var INTERVAL = 1000/FPS; // milliseconds
		var STEP = INTERVAL/1000 // seconds
		var room = {
			width: 5000,
			height: 3000
		};
		var player = new Game.Player(50, 50);
		var camera = new Game.Camera(0, 0, canvas.width, canvas.height, room.width, room.height);
		camera.follow(player, canvas.width/2, canvas.height/2);
		var update = function(){
			player.update(STEP, room.width, room.height);
			camera.update();
		}
		var draw = function(){
			// clear the entire canvas
			context.clearRect(0, 0, canvas.width, canvas.height);
			player.draw(context, camera.xView, camera.yView);
		}
		var gameLoop = function(){
			update();
			draw();
		}
		var runningId = -1;

		Game.play = function(){
			if(runningId == -1){
				runningId = setInterval(function(){
					gameLoop();
				}, INTERVAL);
				console.log("play");
			}
		}

		Game.togglePause = function(){
			if(runningId == -1){
				Game.play();
			}
			else
			{
				clearInterval(runningId);
				runningId = -1;
				console.log("paused");
			}
		}

		// -->

	})();

	// <-- configure Game controls:

	Game.controls = {
		left: false,
		up: false,
		right: false,
		down: false,
	};

	window.addEventListener("keydown", function(e){
		switch(e.keyCode)
		{
			case 37: // left arrow
				Game.controls.left = true;
				break;
			case 38: // up arrow
				Game.controls.up = true;
				break;
			case 39: // right arrow
				Game.controls.right = true;
				break;
			case 40: // down arrow
				Game.controls.down = true;
				break;
		}
	}, false);

	window.addEventListener("keyup", function(e){
		switch(e.keyCode)
		{
			case 37: // left arrow
				Game.controls.left = false;
				break;
			case 38: // up arrow
				Game.controls.up = false;
				break;
			case 39: // right arrow
				Game.controls.right = false;
				break;
			case 40: // down arrow
				Game.controls.down = false;
				break;
			case 80: // key P pauses the game
				Game.togglePause();
				break;
		}
	}, false);

	// -->

	// start the game when page is loaded
	window.onload = function(){
		Game.play();
	}
