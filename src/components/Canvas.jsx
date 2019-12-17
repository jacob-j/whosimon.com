import React from "react";
// import "./style.scss";
function Random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function Bubbles(props) {
	const balloonsCanvas = React.createRef();

	function drawBallons(el) {
		var canvas = el;
		var context = canvas.getContext("2d");

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		/**
		 * @namespace Core namespace
		 */
		var CANVASBALLOON = {};

		// Constants
		CANVASBALLOON.KAPPA = (4 * (Math.sqrt(2) - 1)) / 3;
		CANVASBALLOON.WIDTH_FACTOR = 0.0333;
		CANVASBALLOON.HEIGHT_FACTOR = 0.4;
		CANVASBALLOON.TIE_WIDTH_FACTOR = 0.12;
		CANVASBALLOON.TIE_HEIGHT_FACTOR = 0.1;
		CANVASBALLOON.TIE_CURVE_FACTOR = 0.13;
		CANVASBALLOON.GRADIENT_FACTOR = 0.3;
		CANVASBALLOON.GRADIENT_CIRCLE_RADIUS = 3;

		/**
		 * Creates a new Balloon
		 * @class	Represents a balloon displayed on a HTML5 canvas
		 * @param	{String}	canvasElementID		Unique ID of the canvas element displaying the balloon
		 * @param	{Number}	centerX				X-coordinate of the balloon's center
		 * @param	{Number}	centerY				Y-coordinate of the balloon's center
		 * @param	{Number}	radius				Radius of the balloon
		 * @param	{String}	color				String representing the balloon's base color
		 */
		CANVASBALLOON.Balloon = function(canvas, centerX, centerY, radius, color) {
			this.gfxContext = canvas.getContext("2d");
			this.centerX = centerX;
			this.centerY = centerY;
			this.radius = radius;
			this.color = color;
		};

		/**
		 * Draws the balloon on the canvas
		 */
		CANVASBALLOON.Balloon.prototype.draw = function() {
			// Prepare constants

			var gfxContext = this.gfxContext;
			var centerX = this.centerX;
			var centerY = this.centerY;
			var radius = this.radius;

			var innerRadius = radius / 10;
			var outerRadius = radius;
			// Radius of the entire circle.

			gfxContext.beginPath();
			var gradient = gfxContext.createRadialGradient(
				centerX - radius / 4,
				centerY - radius / 4,
				innerRadius,
				centerX,
				centerY,
				outerRadius
			);
			gradient.addColorStop(0, "white");
			gradient.addColorStop(1, "#515151");

			gfxContext.arc(centerX, centerY, radius, 0, 2 * Math.PI);

			gfxContext.fillStyle = gradient;
			gfxContext.fill();
		};

		var particles = [];

		function createParticles(x, y, color, size) {
			for (var i = 0; i <= size; i++) {
				var r = Random(20, 230);
				var particle = {
					x: x,
					y: y,
					angle: Math.floor(Math.random() * 360 + 1),
					opacity: 1,
					color: `rgb(${r}, ${r}, ${r})`,
					speed: size / 10 + Math.floor(Math.random() * 6 + 2),
					size: Math.floor(Math.random() * 5 + 2),
				};
				particles.push(particle);
			}
		}
		function drawParticles() {
			particles.forEach(function(particle, index) {
				particle.size -= 0.2;
				if (particle.size <= 0) {
					particles.splice(index, 1);
					return false;
				}
				particle.x +=
					particle.speed * Math.cos((particle.angle * Math.PI) / 180);
				particle.y +=
					particle.speed * Math.sin((particle.angle * Math.PI) / 180);
				context.beginPath();
				context.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
				context.fillStyle = particle.color;
				context.fill();
			});
		}

		var balloons = [];

		["touchstart", "click"].forEach(function(listener) {
			canvas.addEventListener(listener, function(event) {
				var x = event.pageX;
				var y = event.pageY;
				balloons.forEach(function(balloon, key) {
					if (
						x > balloon.x - balloon.size &&
						x < balloon.x + balloon.size &&
						y > balloon.y - balloon.size &&
						y < balloon.y + balloon.size
					) {
						balloons.splice(key, 1);
						createParticles(balloon.x, balloon.y, balloon.color, balloon.size);
					}
				});
				return true;
			});
		});

		function drawCanvas() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			context.clearRect(0, 0, canvas.width, canvas.height);

			var random = Random(1, 70);
			var size = Random(10, 220);
			if (random === 1 && balloons.length < 70) {
				balloons.push({
					y: canvas.height + size + 10,
					x: Random(1, canvas.width),
					size: size,
					toRight: false,
					speed: Random(4, 15),
					color: "black",
				});
			}

			balloons.forEach(function(balloon, key) {
				balloon.y -= balloon.speed / 10;
				var balloon1 = new CANVASBALLOON.Balloon(
					canvas,
					balloon.x,
					balloon.y,
					balloon.size,
					balloon.color
				);
				balloon1.draw();
				if (balloon.y + 200 < 0) {
					balloons.splice(key, 1);
				}
			});

			drawParticles();
			requestAnimationFrame(drawCanvas);
		}

		drawCanvas();
	}

	React.useEffect(() => {
		drawBallons(balloonsCanvas.current);
	}, [balloonsCanvas]);

	return (
		<div className="bubbles">
			<canvas ref={balloonsCanvas}></canvas>
		</div>
	);
}

export default Bubbles;
