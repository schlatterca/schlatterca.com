var myPath;
var globalVar = {};
var globalStrokesPositions = [];

var myInterval = 10;
var mySquareInterval = 4;

var myStrokeColor = 'red';
var myStrokeWidth = 40;
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

	if($('.mainmenu > .button_3').hasClass('active')){
		//myPath.simplify(10);
		//myPath.flatten(1);
	}

	if($('.mainmenu > .button_1').hasClass('active')){
		/*if (mySquareInterval >= 4) {
			var rectangle = new Rectangle(new Point(event.point.x, event.point.y), new Size(mySize, mySize));
			var path = new Path.Rectangle(rectangle);
			path.fillColor = 'red';

			mySquareInterval = 0;
		}
		mySquareInterval++;*/
	}
	
	else if($('.mainmenu > .button_2').hasClass('active')){
		drawFunction(event, limit, canvasWidthLimit, canvasHeightLimit, extra);
	}


	else if($('.mainmenu > .button_3').hasClass('active')){
		//window.setInterval(drawFunction(event, limit, canvasWidthLimit, canvasHeightLimit, extra), 50000);
		//window.setInterval(console.log('ciao'), 50000);
		if (myInterval >= 10) {
			drawFunction(event, limit, canvasWidthLimit, canvasHeightLimit, extra);
			myInterval = 0;
		}
		myInterval++;
		
	}
}

function onMouseUp(event) {
	/*var myCircle = new Path.Circle({
		center: event.point,
		radius: 10
	});
	myCircle.strokeColor = 'black';
	myCircle.fillColor = 'white';*/
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


function drawFunction(event, limit, canvasWidthLimit, canvasHeightLimit, extra) {
	if ((event.point.x > limit)&&(event.point.x < canvasWidthLimit)&&
		(event.point.y > limit)&&(event.point.y < canvasHeightLimit)){
		myPath.add(event.point.x + extra, event.point.y + extra);
		//console.log(event.point);
		//console.log(canvasWidthLimit);
	} /*else if (event.point.x < limit) {
		myPath.add(limit, event.point.y + extra);
		myPath = new Path();
		myPath.strokeColor = myStrokeColor;
		myPath.strokeWidth = myStrokeWidth;
		myPath.strokeCap = myStrokeCap;
		myPath.strokeJoin = myStrokeJoin;
	} else if (event.point.x > canvasWidthLimit) {
		myPath.add(canvasWidthLimit, event.point.y + extra);
		myPath = new Path();
		myPath.strokeColor = myStrokeColor;
		myPath.strokeWidth = myStrokeWidth;
		myPath.strokeCap = myStrokeCap;
		myPath.strokeJoin = myStrokeJoin;
	} else if (event.point.y < limit) {
		myPath.add(event.point.x + extra, limit);
		myPath = new Path();
		myPath.strokeColor = myStrokeColor;
		myPath.strokeWidth = myStrokeWidth;
		myPath.strokeCap = myStrokeCap;
		myPath.strokeJoin = myStrokeJoin;
	} else if (event.point.y > canvasHeightLimit) {
		myPath.add(event.point.x + extra, canvasHeightLimit);
		myPath = new Path();
		myPath.strokeColor = myStrokeColor;
		myPath.strokeWidth = myStrokeWidth;
		myPath.strokeCap = myStrokeCap;
		myPath.strokeJoin = myStrokeJoin;
	}*/
}

var drawGridRects = function(num_rectangles_wide, num_rectangles_tall, boundingRect) {
    var width_per_rectangle = boundingRect.width / num_rectangles_wide;
    var height_per_rectangle = boundingRect.height / num_rectangles_tall;
    for (var i = 0; i < num_rectangles_wide; i++) {
        for (var j = 0; j < num_rectangles_tall; j++) {
            var aRect = new paper.Path.Rectangle(boundingRect.left + i * width_per_rectangle, boundingRect.top + j * height_per_rectangle, width_per_rectangle, height_per_rectangle);
            aRect.strokeColor = 'white';
            aRect.fillColor = 'white';
			aRect.onMouseEnter = function() {

				if($('.mainmenu > .button_1').hasClass('active')){
					this.strokeColor = 'red';
					this.fillColor = 'red';
				};
			}
        }
    }
}

drawGridRects(project.view.viewSize.width/40, project.view.viewSize.height/40, paper.view.bounds);





setTimeout(function() {activate($('.mainmenu > .button_2'))}, 3000);
setTimeout(function() {activate($('.mainmenu > .button_3'))}, 6000);
setTimeout(function() {$('.mainmenu > .button_3').removeClass('active'), $('#message')[0].innerText = 'finito!'}, 9000);


function activate(element){
	$('.mainmenu > button').removeClass('active');
	element.addClass('active');

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
	}

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
} 