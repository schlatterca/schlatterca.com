var myPath;
var globalVar = {};
var globalStrokesPositions = [];

var myInterval = 10;
var mySquareInterval = 4;

var myStrokeColor = 'rgb(255,0,255)';
var myStrokeWidth = 20;
var myStrokeCap = 'square';
var myStrokeJoin = 'square';
var mySize = 60;

/*function onMouseDown(event) {
	myPath = new Path();
	myPath.strokeColor = myStrokeColor;
	myPath.strokeWidth = myStrokeWidth;
	myPath.strokeCap = myStrokeCap;
	//myPath.strokeJoin = myStrokeJoin;
	
	//CHECK
	myPath.dashOffset = 100;
	myPath.strokeJoin = 'bevel';
	myPath.closed = true;
	myPath.fillColor = myStrokeColor;

	if($('.mainmenu > .button_3').hasClass('active')){
		myPath.closed = false;
		myPath.fillColor = 'transparent';
	}
}*/
function onMouseMove(event) {
	//myPath.add(event.point);
	//myPath.add(event.point.x + 2.5, event.point.y + 2.5);
	var limit = 5;
	var extra = 2.5; //to align the path to the cursor
	var canvasWidthLimit = project.view.viewSize.width - (limit+1);
	var canvasHeightLimit = project.view.viewSize.height - (limit+1);
	var line;
	var zigZag;

	if($('.mainmenu > .button_1').hasClass('active')){
		if (myInterval >= 10) {
			drawFunction(event, limit, canvasWidthLimit, canvasHeightLimit, extra);
			//var raster = myPath.rasterize(10);
			myInterval = 0;
		}
		myInterval++;
	}
	
	else if($('.mainmenu > .button_2').hasClass('active')){
		if (myInterval >= 4) {
			drawFunction(event, limit, canvasWidthLimit, canvasHeightLimit, extra);
			myInterval = 0;
		}
		myInterval++;
		//drawFunction(event, limit, canvasWidthLimit, canvasHeightLimit, extra);
		
		//myPath.smooth(100);
		//myPath.flatten(10);
		//myPath.simplify(1);
		//myPath.divideAt(myPath.length / 2);
		//roundPath(myPath, 2);

		//myPath.smooth({ type: 'continuous' });
		//myPath.smooth({ type: 'asymmetric' });
		//myPath.smooth({ type: 'catmull-rom' });
		//myPath.smooth({ type: 'geometric' });
	}


	else if($('.mainmenu > .button_3').hasClass('active')){

		if (myInterval >= 10) {
			/*drawFunction(event, limit, canvasWidthLimit, canvasHeightLimit, extra);
			myInterval = 0;

			var semiLastPoint = myPath._segments[myPath._segments.length - 2]._point;
			var lastPoint = myPath._segments[myPath._segments.length - 1]._point;
			var distance = lastPoint - semiLastPoint;
			console.log(distance);
			if((distance.x > 50)||(distance.y > 50)||(distance.x < -50)||(distance.y < -50)){
				var pointX = {x: event.point.x-30, y: event.point.y-40};
				var differentEvent = {point: pointX};
				console.log(event, differentEvent);
				drawFunction(differentEvent, limit, canvasWidthLimit, canvasHeightLimit, extra);
				return
			}*/

			//zigzag continuo, proporzionale alla lunghezza dell'ultimo tratto
			if(myPath._segments.length <= 2){
				console.log(myPath._segments.length);
				drawFunction(event, limit, canvasWidthLimit, canvasHeightLimit, extra);
			} else {
				var semiLastPoint = myPath._segments[myPath._segments.length - 2]._point;
				var lastPoint = myPath._segments[myPath._segments.length - 1]._point;
				var distance = lastPoint - semiLastPoint;
				console.log(distance);
				var randomX = (Math.round(Math.random()) * 2 - 1)*(distance.y/3);
				var randomY = (Math.round(Math.random()) * 2 - 1)*(distance.x/3);

				var pointX = {x: event.point.x+randomX, y: event.point.y+randomY};
				var differentEvent = {point: pointX};
				console.log(event, differentEvent);
				drawFunction(differentEvent, limit, canvasWidthLimit, canvasHeightLimit, extra);
			}
			myInterval = 0;
		}
		myInterval++;
		
		/*zigZag = createZigZagFromLine(myPath);
		myPath.lastSegment.point = event.point;
		if (zigZag) {
			zigZag.remove();
		}
		zigZag = createZigZagFromLine(myPath);*/

		/*var step = event.delta / 2;
		step.angle += 90;
		//step.angle += Math.random() * 360;
		var top = event.middlePoint + step;
		var bottom = event.middlePoint - step;
		myPath.add(top);
		myPath.add(bottom);
		//path.insert(0,bottom);
		//myPath.smooth();*/

	}
}

function onMouseUp(event) {
	/*var myCircle = new Path.Circle({
		center: event.point,
		radius: 10
	});
	myCircle.strokeColor = 'black';
	myCircle.fillColor = 'white';*/

	/*if($('.mainmenu > .button_2').hasClass('active')){
		roundPath(myPath, 2);
	}*/
}

var items = project.getItems({
	/*selected: true,
	class: Path*/
});

//var startWidth = $( window ).width();
globalVar.startWidth = project.view.viewSize.width;

var items = project.getItems({});




//CLICK BUTTON TO ACTIVATE
/*$('.mainmenu > button').on( "click", function() {
	$('.mainmenu > button').removeClass('active');
	$(this).addClass('active');

	if($('.mainmenu > .button_2').hasClass('active')){
		myStrokeCap = 'round';
		myStrokeJoin = 'round';
		myStrokeColor = 'blue';
		myStrokeWidth = 8;
	} else if($('.mainmenu > .button_3').hasClass('active')) {
		myStrokeCap = 'round';
		myStrokeJoin = 'round';
		myStrokeColor = 'lawngreen';
		myStrokeWidth = 8;
	} else if($('.mainmenu > .button_1').hasClass('active')) {
		myStrokeCap = 'square';
		myStrokeJoin = 'square';
		myStrokeColor = 'red';
		myStrokeWidth = 40;
	}
} );*/




var mySize = 80;
var jump = 80;
var myGrid = new Group();
var usedGrid = 0;
var percentToCover = 10; /*10 for testing*/

for (var i = 0; i < project.view.viewSize.width; i+=jump) {
	for (var j = 0; j < project.view.viewSize.height; j+=jump) {
		var gridPart = new Path.Rectangle({
			center:[i-jump/2, j-jump/2],
			size: [mySize,mySize],
			strokeColor: 'transparent',
			fillColor: 'transparent'
		})
		myGrid.addChild(gridPart);
	}
}

var firstPause = 1000;
var phaseDuration = 3000;

function drawFunction(event, limit, canvasWidthLimit, canvasHeightLimit, extra) {
	if ((event.point.x > limit)&&(event.point.x < canvasWidthLimit)&&
		(event.point.y > limit)&&(event.point.y < canvasHeightLimit)){
		
		/*OPTION 1*/
		if($('.mainmenu > .button_1').hasClass('active')){
			myPath.add(event.point.x + extra, event.point.y + extra);

			for (var i = 0; i < myGrid._children.length; i++) {
				if((myGrid._children[i].intersects(myPath))&&(myGrid._children[i].fillColor != 'rgb(255,0,255)')){
					myGrid._children[i].fillColor = 'rgb(255,0,255)';

					usedGrid ++;
				}
			}
		}
		if(($('.mainmenu > .button_1').hasClass('active'))&&(usedGrid >= myGrid._children.length/percentToCover)){
			$('.mainmenu > .button_1').removeClass('active');
			setTimeout(function() {activate($('.mainmenu > .button_2'))}, firstPause);
			setTimeout(function() {$('.mainmenu > .button_2').removeClass('active')}, firstPause+phaseDuration);
			setTimeout(function() {activate($('.mainmenu > .button_3'))}, (2*firstPause)+phaseDuration);
			setTimeout(function() {$('.mainmenu > .button_3').removeClass('active')}, (2*firstPause)+(2*phaseDuration));
			setTimeout(function() {$('.mainmenu > .button_3').removeClass('active'), $('#message')[0].innerText = 'finito!'}, (2*firstPause)+(2*phaseDuration));
		}


		/*OPTION 2*/
		if($('.mainmenu > .button_2').hasClass('active')){
			myPath.add(event.point.x + extra, event.point.y + extra);

			//myPath.smooth(100);
			//myPath.flatten(10);
			myPath.simplify(1);
			//myPath.divideAt(myPath.length / 2);
			//roundPath(myPath, 2);

			//myPath.smooth({ type: 'continuous' });
			//myPath.smooth({ type: 'asymmetric' });
			//myPath.smooth({ type: 'catmull-rom' });
			//myPath.smooth({ type: 'geometric' });

			/*console.log(myPath._segments[0]._point._x, myPath._segments[0]._point._y);
			console.log(myPath._segments[myPath._segments.length-1]._point._x, myPath._segments[myPath._segments.length-1]._point._y);
			var vector = myPath._segments[myPath._segments.length-1]._point - myPath._segments[0]._point;
			console.log(vector.angle);
			if (vector.angle > 45){
				myPath.add(event.point.x + extra, event.point.y + extra);
			}*/
		}

		else {
			myPath.add(event.point.x + extra, event.point.y + extra);
		}
	}
}


//ACTIVATE OPTION 1
setTimeout(function() {activate($('.mainmenu > .button_1'))}, 50);

/*setTimeout(function() {activate($('.mainmenu > .button_2'))}, 3000);
setTimeout(function() {activate($('.mainmenu > .button_3'))}, 6000);
setTimeout(function() {$('.mainmenu > .button_3').removeClass('active'), $('#message')[0].innerText = 'finito!'}, 9000);*/


function activate(element){
	$('.mainmenu > button').removeClass('active');
	element.addClass('active');

	if($('.mainmenu > .button_1').hasClass('active')){
		myStrokeCap = 'square';
		myStrokeJoin = 'square';
		myStrokeColor = 'transparent';
		myStrokeWidth = 8;
	} else if($('.mainmenu > .button_2').hasClass('active')){
		myStrokeCap = 'round';
		myStrokeJoin = 'round';
		myStrokeColor = 'rgb(0,255,255)';
		myStrokeWidth = 20;
	} else if($('.mainmenu > .button_3').hasClass('active')) {
		myStrokeCap = 'round';
		myStrokeJoin = 'round';
		myStrokeColor = 'rgb(255,255,0)';
		myStrokeWidth = 8;
	}

	myPath = new Path();
	myPath.strokeColor = myStrokeColor;
	myPath.strokeWidth = myStrokeWidth;
	myPath.strokeCap = myStrokeCap;
	myPath.strokeJoin = myStrokeJoin;

	//CHECK
	myPath.dashOffset = 100;
	myPath.strokeJoin = 'bevel';
	myPath.closed = false;
	myPath.fillColor = myStrokeColor;

	if($('.mainmenu > .button_1').hasClass('active')){
		myPath.closed = false;
		myPath.fillColor = 'transparent';
	} else if($('.mainmenu > .button_2').hasClass('active')){
		//myPath.closed = true;
		myPath.fillColor = 'rgb(0,255,255)';

	} else if($('.mainmenu > .button_3').hasClass('active')){
		myPath.closed = false;
		myPath.fillColor = 'transparent';
	}
}


//ROUNDPATH
function roundPath(path,radius) {
    var segments = path.segments.slice(0);
    path.segments = [];
    for(var i = 0, l = segments.length; i < l; i++) {
        var curPoint = segments[i].point;
        var nextPoint = segments[i + 1 == l ? 0 : i + 1].point;
        var prevPoint = segments[i - 1 < 0 ? segments.length - 1 : i - 1].point;
        var nextDelta = curPoint - nextPoint;
        var prevDelta = curPoint - prevPoint;
        nextDelta.length = radius;
        prevDelta.length = radius;
        path.add({
            point:curPoint - prevDelta,
            handleOut: prevDelta/2
        });
        path.add({
            point:curPoint - nextDelta,
            handleIn: nextDelta/2
        });
    }
    path.closed = true;
    return path;
}


function createZigZagFromLine(line) {
    var zigZag = new Path({ selected: true });

    var count = 4, length = line.length;
    for (var i = 0; i <= count; i++) {
        var offset = i / count * length;
        var normal = i === 0 || i === count
            ? new Point(0, 0)
            : line.getNormalAt(offset) * 30;
        var point = line.getPointAt(offset).add(i % 2 == 0 ? normal
            : -normal);
        zigZag.add(point);
    }

    return zigZag;
}