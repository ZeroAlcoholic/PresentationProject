/* *** View *** */


var finish_btn =  60; 
var margin = 20 ;
var border_left = margin ; 
var border_top = margin ; 
var border_right = window.innerWidth-margin-margin ; 
var border_bottom = window.innerHeight-margin-margin-margin-margin-finish_btn; 
var border_split_x = window.innerWidth/2 ;
var shapes ; 
var question_file ; 

/* the timer */ 
var m=0;
var s=0;
var timer_is_on=0;
var c=document.getElementById("timer_canvas");
var ctx=c.getContext("2d");
ctx.font="60px Arial";
ctx.fillText("0"+m+":"+"0"+s,10,50);

function timeCount()
{
	// add a zero in front of numbers<10
	if(m<10&&s<10)
	{
		ctx.clearRect(0,0,200,100);
		ctx.fillText("0"+m+":"+"0"+s,10,50);
	}
	else if(m<10&&s>=10)
	{
		ctx.clearRect(0,0,200,100);
		ctx.fillText("0"+m+":"+s,10,50);
	}
	else if(m>=10&&s<10)
	{
		ctx.clearRect(0,0,200,100);
		ctx.fillText(m+":"+"0"+s,10,50);
	}
	else
	{
		ctx.clearRect(0,0,200,100);
		ctx.fillText(m+":"+s,10,50);
	}
	s=s+1;
	m=checkTimeM(s);
	s=checkTimeS(s);
	t=setTimeout(function(){timeCount()},1000);
}

function checkTimeM(s)
{
	if(s>=60)
		m=m+1;
	return m;
}

function checkTimeS(s)
{
	if(s>=60)
		s=s-60;
	return s;
}

function startCount()
{
	// set all shapes to 'draggable'
	shapes.forEach(set_to_draggable);

	if (!timer_is_on)
	{
		m=0;
		s=0;
		timer_is_on=1;
		timeCount();
	}
}

function stopCount()
{
	shapes.forEach(set_to_undraggable);

	clearTimeout(t);
	timer_is_on=0;
}
/* end of the timer */

/* the stage and layer of KineticJS */ 
var stage = new Kinetic.Stage({
	container: 'container',
	X:0, 
	Y:0, 
	width: window.innerWidth,
	height: border_bottom
});
var layer = new Kinetic.Layer({
	X:0, 
	Y:0, 
	width: window.innerWidth, 
	height: border_bottom
});

var border = new Kinetic.Line({
	points: [border_left, border_top, border_right, border_top, border_right, border_bottom, border_left, border_bottom, border_left, border_top], 
	stroke: '#999999', 
	strokeWidth: 2, 
	lineJoin: 'round'
});
layer.add(border);

var border_split = new Kinetic.Line({
	points: [border_split_x, border_top, border_split_x, border_bottom], 
	stroke: '#999999',
    strokeWidth: 2,
    lineJoin: 'round'
     //line segments with a length of 20, with a gap of 10px
});
layer.add(border_split);
stage.add(layer);
/*  end of the stage and layer */

// set the canvas size
$(document).ready( function() {
	$(window).resize(function(){
		stage.setWidth(window.innerWidth);
		stage.setHeight(window.innerHeight);
		layer.setWidth(window.innerWidth);
		layer.setHeight(window.innerHeight);
	}) ; 
}); 

document.write('<script language="javascript" src="teacherwindow.js"></script>');
document.write('<script language="javascript" src="tool.js"></script>');