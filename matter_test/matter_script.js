window.onload = (event) => {
	
	// module aliases
	var Engine = Matter.Engine,
		Render = Matter.Render,
		Runner = Matter.Runner,
		MouseConstraint = Matter.MouseConstraint,
		Mouse = Matter.Mouse,
		Bodies = Matter.Bodies,
		Composite = Matter.Composite;

	let myColor = 'rgb(0, 240, 170)';

	// create an engine
	//var engine = Engine.create();
	const engine = Matter.Engine.create();
	engine.world.gravity.y = 0;
	engine.timing.timeScale = 0.2;

	// create a renderer
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			wireframes: false,
			background: 'white'
		}		
	});
	

	


	



	//myBox
	/*const engine2 = Matter.Engine.create();
	const box_x = {
		w: 140,
		h: 80,
		body: Matter.Bodies.rectangle(150, 0, 140, 80),
		elem: document.querySelector("#box_x"),
		render() {
			const {x, y} = this.body.position;
			this.elem.style.top = `${y - this.h / 2}px`;
			this.elem.style.left = `${x - this.w / 2}px`;
			this.elem.style.transform = `rotate(${this.body.angle}rad)`;
		},
	};
	const ground_x = Matter.Bodies.rectangle(
	200, 200, 400, 120, {isStatic: true}
	);
	const mouseConstraint_x = Matter.MouseConstraint.create(
		engine2, {element: document.body}
	);
	Matter.Composite.add(engine2.world, [box_x.body]);
	//engine2.world, [box_x.body, ground_x, mouseConstraint_x]
	(function rerender() {
	box_x.render();
	Matter.Engine.update(engine2);
	requestAnimationFrame(rerender);
	})();*/




	
	

	// create two boxes and a ground
	var boxA = Matter.Bodies.circle(400, 200, 25, { frictionAir: 0.001, render: {fillStyle: myColor}});
	var boxB = Matter.Bodies.circle(200, 100, 25, { frictionAir: 0.001, render: {fillStyle: myColor}});
	var boxC = Matter.Bodies.circle(600, 300, 25, { frictionAir: 0.001, render: {fillStyle: myColor}});
	var boxD = Matter.Bodies.circle(100, 400, 25, { frictionAir: 0.001, render: {fillStyle: myColor}});
	var boxE = Matter.Bodies.circle(400, 600, 25, { frictionAir: 0.001, render: {fillStyle: myColor}});
	var boxF = Matter.Bodies.circle(700, 500, 25, { frictionAir: 0.001, render: {fillStyle: myColor}});


	var groundA = Matter.Bodies.rectangle(400, 610, 810, 80, { isStatic: true, render: {
		fillStyle: 'transparent',
		strokeStyle: 'black',
		lineWidth: 1} });
	var groundB = Matter.Bodies.rectangle(400, 0, 800, 80, { isStatic: true, render: {
		fillStyle: 'transparent',
		strokeStyle: 'black',
		lineWidth: 1} });
	var groundC = Matter.Bodies.rectangle(800, 300, 80, 600, { isStatic: true, render: {
		fillStyle: 'transparent',
		strokeStyle: 'black',
		lineWidth: 1} });
	var groundD = Matter.Bodies.rectangle(0, 300, 80, 600, { isStatic: true, render: {
		fillStyle: 'transparent',
		strokeStyle: 'black',
		lineWidth: 1} });

	const box = {
		w: 140,
		h: 40,
		body: Matter.Bodies.rectangle(150, 0, 140, 40, { render: {fillStyle: 'transparent'} }),
		elem: document.querySelector("#box"),
		render() {
			const {x, y} = this.body.position;
			this.elem.style.top = `${y + this.h*1.4}px`;
			this.elem.style.left = `${x - this.w / 2}px`;
			this.elem.style.transform = `rotate(${this.body.angle}rad)`;
		},
	};
	const box_2 = {
		w: 80,
		h: 40,
		body: Matter.Bodies.rectangle(350, 200, 80, 40, { render: {fillStyle: 'transparent'} }),
		elem: document.querySelector("#box_2"),
		render() {			
			const {x, y} = this.body.position;
			this.elem.style.top = `${y + this.h*1.4}px`;
			this.elem.style.left = `${x - this.w / 2}px`;
			this.elem.style.transform = `rotate(${this.body.angle}rad)`;
		},
	};
	const box_3 = {
		w: 120,
		h: 40,
		body: Matter.Bodies.rectangle(150, 400, 120, 40, { render: {fillStyle: 'transparent'} }),
		elem: document.querySelector("#box_3"),
		render() {			
			const {x, y} = this.body.position;
			this.elem.style.top = `${y + this.h*1.4}px`;
			this.elem.style.left = `${x - this.w / 2}px`;
			this.elem.style.transform = `rotate(${this.body.angle}rad)`;
		},
	};
	const box_4 = {
		w: 80,
		h: 40,
		body: Matter.Bodies.rectangle(350, 400, 80, 40, { render: {fillStyle: 'transparent'} }),
		elem: document.querySelector("#box_4"),
		render() {			
			const {x, y} = this.body.position;
			this.elem.style.top = `${y + this.h*1.4}px`;
			this.elem.style.left = `${x - this.w / 2}px`;
			this.elem.style.transform = `rotate(${this.body.angle}rad)`;
		},
	};

	// add all of the bodies to the world
	//Composite.add(engine.world, [box, boxA, boxB, groundA, groundB, groundC, groundD]);

	




	const ground = Matter.Bodies.rectangle(
		200, 200, 400, 120, {isStatic: true}
	);
	const mouseConstraint2 = Matter.MouseConstraint.create(
		engine, {element: document.body}
	);
	/*Matter.Composite.add(
		engine.world, [box, box_2, boxA, boxB, groundA, groundB, groundC, groundD]
	);*/

	Matter.Composite.add(
		engine.world, [box.body, box_2.body, box_3.body, box_4.body, boxA, boxB, boxC, boxD, boxE, boxF, groundA, groundB, groundC, groundD]);
	(function rerender() {
		box.render();
		box_2.render();
		box_3.render();
		box_4.render();
		Matter.Engine.update(engine);
		requestAnimationFrame(rerender);
	})();




	
	//SVG
	/*const bodies = [
	Matter.Bodies.rectangle(0,0,0,0, {isStatic: true}),
	...[...document.querySelectorAll("svg path")].map(path => {
		const body = Matter.Bodies.fromVertices(
		100, 80, Matter.Svg.pathToVertices(path), {render: {
			fillStyle: 'black',
			strokeStyle: 'black',
			lineWidth: 1}
		}, true);
		Matter.Body.scale(body, 0.2, 0.2);
		return body;
	})
	];
	Matter.Composite.add(engine.world, bodies);*/






	

	// run the renderer
	Render.run(render);

	// create runner
	var runner = Runner.create();

	// run the engine
	Runner.run(runner, engine);

	// add mouse control
	var mouse = Mouse.create(render.canvas),
	mouseConstraint = MouseConstraint.create(engine, {
		mouse: mouse,
		constraint: {
			stiffness: .8,
			render: {
				visible: false
			}
		}
	});

	Composite.add(engine.world, mouseConstraint);

	// keep the mouse in sync with rendering
	render.mouse = mouse;


	//ADD A CIRCLE
	var addCircle = function (x, y) {
		return Bodies.circle(x, y, 25, { frictionAir: 0.001, render: {fillStyle: myColor}});
		//Matter.Bodies.circle(400, 200, 25, { frictionAir: 0.001, render: {fillStyle: myColor}});
	};

	//World.add(engine.world, addCircle(x, y));
	$('canvas').on('click', function(event){
		Composite.add(engine.world, addCircle(event.clientX, event.clientY-$('.mainmenu')[0].getBoundingClientRect().height));
		console.log($('.mainmenu')[0].getBoundingClientRect().height);
	});

	console.log("page is fully loaded");
  };