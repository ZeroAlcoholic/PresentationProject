/* *** Model *** */
var shapes ; 
var question_file ; 
var correct_answer ; 

// things for init set
// set offsettttt
/*
function set_offset()
{
	var type ;
	var newX, newY; 
	for (var i = 0; i < shapes.length; i++) {
		type = shapes[i].getClassName(); 
		if( type == "Polygon")
		{
			newX = shapes[i].getAttr('width')/2; 
			newY = shapes[i].getAttr('height')/2; 
		}
		else if( type == "Rect")
		{
			newX = shapes[i].getWidth()/2; 
			newY = shapes[i].getHeight()/2;
		}
		else if( type == "Wedge")
		{
			newX = shapes[i].getRadius()/2 ;
			newY = shapes[i].getAngleDeg() * shapes[i].getRadius() * 2 / 360
		}
		shapes[i].setOffset(newX, newY); 
	};
	console.log(shapes[0].getOffset()); 
	
}
function resetOffset()
{
	for (var i = 0; i < shapes.length; i++) {
		shapes[i].setOffset(0,0); 
	};
	console.log( shapes[0].getOffset());
}
*/

//   1. random set their position and angles
function random_position(element, index, array){
	var x_M, x_m, y_M, y_m; 
	var type = element.getClassName();
	var endurance = 100 ; 
	
	if( type == "Polygon")
	{
		if( element.getAttr('id') == 99 )
		{
			endurance = 100 ; 
		}
		x_M = border_right - element.getAttr('width')/2 - endurance; 
		x_m = border_left + element.getAttr('width')/2 + endurance; 
		y_M = border_bottom - element.getAttr('height')/2 - endurance ;
		y_m = border_top + element.getAttr('height') + endurance; 
		endurance = 30 ; 
	}
	else if( type == "Rect" )
	{
		x_M = border_right - element.getWidth()/2 - endurance; 
		x_m = border_left + element.getWidth()/2 + endurance; 
		y_M = border_bottom - element.getHeight()/2 - endurance ;
		y_m = border_top + element.getHeight()/2 + endurance; 
	}
	else if( type == "Wedge")
	{
		x_M = border_right - element.getRadius()/2 - endurance; 
		x_m = border_left + element.getRadius()/2 + endurance; 
		y_M = border_bottom - element.getRadius()/2 - endurance ;
		y_m = border_top + element.getRadius()/2 + endurance; 
	}
	else if( type == "Circle")
	{
		x_M = border_right - element.getRadius() - endurance; 
		x_m = border_left + element.getRadius() + endurance; 
		y_M = border_bottom - element.getRadius() - endurance ;
		y_m = border_top + element.getRadius() + endurance; 
	}
	var newX = Math.random() * (x_M - x_m) + x_m; 
	var newY = Math.random() * (y_M - y_m) + y_m; 
	element.setX(newX);
	element.setY(newY);

	var degree = Math.floor(Math.random()*24 ) * 15 ; 
	element.setRotationDeg(degree); 
	
	// double check after degree turns
/*
	if( element.getX() < border_left )
	{	newX += 150 ; }
	else if( element.getX() + element.getAttr('width') > border_right )
	{	newX -= 150 ; }
	if( element.getY() < border_top )
	{	newY += 150 ; }
	else if( element.getY() + element.getAttr('height') > border_top)
	{	newY -= 150 ; }
	element.setX(newX);
	element.setY(newY);
	*/
}
//  2. set offset for Wedges , to know whether it's on border easier
function setWedgeOffset(element, index, array)
{
	if(element.getClassName() == "Wedge")
	{
		var radius = element.getRadius(); 
		element.setOffset( radius/2, radius/2); 
	}
}
//  3. mouse events on the shapes 
function shape_mouse_event(element, index, array)
{
        var initX, initY; 
	element.on('dragstart', function() {
    	element.moveToTop();
    	initX = element.getX(); 
		initY = element.getY();  
		
  	});
  	element.on('dragmove', function(){
  		element.setOpacity(0.7);
  		var snapX = element.getX(); 
  		var snapY = element.getY(); 
  		
  	}); 
  	element.on('dragend', function(){
  		element.setOpacity(1); 
  		layer.draw();
  		if( is_on_border(element) )
  		{
  			element.setPosition(initX, initY); 
  			layer.draw();
  		}
  	});
  	element.on('click', function() {
  		element.rotate(Math.PI/12); 
                layer.draw();
  	});
}
//  4. when the timer starts counting, shapes are draggable 
function set_to_draggable(element, index, array)
{	element.setDraggable(true);	}

//  5. when the timer stops counting, shapes are undraggable 
function set_to_undraggable(element, index, array)
{	element.setDraggable(false);	}


// ?ñÂΩ¢?®È??åÊ?ÔºåÂ??ûÂ?‰ΩçÁΩÆ
function is_on_border(shape)
{
	// on the edge of 'border'
	var type = shape.getClassName();
	var posX = shape.getX() ; 
	var posY = shape.getY(); 
	var width, height, radius ; 
	if( type == "Polygon")
	{
		width = shape.getAttr('width');
		height = shape.getAttr('height');
		if( (   posX - width/2 < border_left )
			|| (posX + width/2 > border_right ) 
			|| (posY - height/2 < border_top )
			|| (posY + height/2 > border_bottom) )
		{	return true; 	}
	}
	else if( type == "Rect" )
	{
		width = shape.getWidth(); 
		height = shape.getHeight(); 
		if( (   posX - width/2 < border_left )
			|| (posX + width/2 > border_right ) 
			|| (posY - height/2 < border_top )
			|| (posY + height/2 > border_bottom)  )
		{	return true; 	}
	}
	else if( type == "Circle")
	{	
		radius = shape.getRadius(); 
		if( (posX - radius < border_left )
			|| (posX + radius > border_right ) 
			|| (posY - radius < border_top )
			|| (posY + radius > border_bottom)   )
		{	return true;	}
	}
	else if( type == "Wedge"  )
	{
		radius = shape.getRadius(); 
		if( (posX - radius/2 < border_left )
			|| (posX + radius/2 > border_right ) 
			|| (posY - radius/2 < border_top )
			|| (posY + radius/2 > border_bottom)  )
		{	return true;	}
	}
	
	return false; 
}



function getQuestionFromNumber(number)
{
    question_file = "ques_A0" + number +".txt";   
    
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", question_file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status === 0)
            {
                var allText = rawFile.responseText;
                //alert(allText);
                var block = allText.split("\n");
                correct_answer = block ;

                var data = Array(block.length);
                for(var i=0; i<block.length; ++i)
                    data[i] = block[i].split(" ");
                drawQuestionFromNumber(data);
            }
        }
    }
    rawFile.send(null);

}
function drawQuestionFromNumber(data)
{
    for(var i=0; i<data.length; ++i)
        layer.add(buildblock(parseInt(data[i][0]), parseInt(data[i][1]), parseInt(data[i][2]), parseInt(data[i][3])));

    // add the shapes to the layer
    stage.add(layer);

    shapes = stage.get(".shape");
    shapes.forEach(random_position);
    
    layer.draw();
}

document.write('<script language="javascript" src="verify.js"></script>');



/*
function snap_by_grid(YourSquares, obj)
{
   	var lastone = shapes.length-1;
   	var maxDist = 125;
   	var minDist = 75;
   	var squarelength = 100;

   	for(var i=0; i<shapes; i++)
   	{
     	var checkx = abs(shapes[index].x - shapes[i].x);
     	var checky = abs(shapes[index].y - shapes[i].y);
     	var multiplyX = Math.round((shapes[index].x - shapes[i].x)/squarelength);
     	var multiplyY = Math.round((shapes[index].y - shapes[i].y)/squarelength);

      	if(checkx < maxDist && checkx > minDist && i !== index)
        {
          	YourSquares[index].x = YourSquares[i].x + multiplyX*squarelength;
        }
      	if(checky < maxDist && checky > minDist && i !== index)
        {
          YourSquares[index].y = YourSquares[i].y + multiplyY*squarelength;
        }
   }
}
*/
