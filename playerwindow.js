/* *** Model *** */
var shapes ; 
var question_file ; 
var correct_answer ; 

// things for init set
// set offsettttt
function set_offset(element, index, array)
{
	var type = element.getClassName();
	var newX, newY; 
	if( type == "Polygon")
	{
		newX = element.getAttr('width')/2; 
		newY = element.getAttr('height')/2; 
	}
	else if( type == "Rect")
	{
		newX = element.getWidth()/2; 
		newY = element.getHeight()/2;
	}
	else if( type == "Wedge")
	{
		newX = element.getRadius()/2 ;
		newY = element.getAngleDeg() * element.getRadius() * 2 / 360
	}
	element.setOffset(newX, newY); 
}

//   1. random set their position and angles
function random_position(element, index, array){
	var x_M, x_m, y_M, y_m; 
	var type = element.getClassName();
	var endurance = 30 ; 
	
	if( type == "Polygon")
	{
		if( element.getAttr('id') == 99 )
		{
			endurance = 100 ; 
		}
		x_M = border_right - element.getAttr('width')/2 - endurance; 
		x_m = border_split_x + element.getAttr('width')/2 + endurance; 
		y_M = border_bottom - element.getAttr('height')/2 - endurance ;
		y_m = border_top + element.getAttr('height') + endurance; 
		endurance = 30 ; 
	}
	else if( type == "Rect" )
	{
		x_M = border_right - element.getWidth()/2 - endurance; 
		x_m = border_split_x + element.getWidth()/2 + endurance; 
		y_M = border_bottom - element.getHeight()/2 - endurance ;
		y_m = border_top + element.getHeight()/2 + endurance; 
	}
	else if( type == "Wedge")
	{
		x_M = border_right - element.getRadius()/2 - endurance; 
		x_m = border_split_x + element.getRadius()/2 + endurance; 
		y_M = border_bottom - element.getRadius()/2 - endurance ;
		y_m = border_top + element.getRadius()/2 + endurance; 
	}
	else if( type == "Circle")
	{
		x_M = border_right - element.getRadius() - endurance; 
		x_m = border_split_x + element.getRadius() + endurance; 
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
  		var snap_direction = near_and_snap(element); 
  		var snapX = element.getX(); 
  		var snapY = element.getY(); /*
  		if( snap_direction  )
  		{
  			//snap_by_grid(element, snap_direction); 
  			if( snap_direction == "X" )
			{
				$(element).draggable( {grid:[20, 20]} ); 
			}
			else if( snap_direction == "Y")
			{
				console.log(initX);
				element.setPosition(snapX, Math.floor(element.getY()/100)*100 +50); 
			}
  		}*/
  	}); 
  	element.on('dragend', function(){
  		element.setOpacity(1); 
  		layer.draw();
  		if( is_on_border(element) )
  		{
  			element.setPosition(initX, initY); 
  			layer.draw();
  		}
  		whether_in_used(element); 

  	});
  	element.on('click', function() {
  		element.rotate(Math.PI/12); 
  	});
}
//  4. when the timer starts counting, shapes are draggable 
function set_to_draggable(element, index, array)
{	element.setDraggable(true);	}

//  5. when the timer stops counting, shapes are undraggable 
function set_to_undraggable(element, index, array)
{	element.setDraggable(false);	}

// 圖形靠近時 snap
function near_and_snap(obj){
	for( var i=0; i< shapes.length; i++ )
	{
		if( shapes[i] == obj )
		{
			continue; 
		}
		var obj_left = obj.getX() - obj.getWidth()/2; 
		var obj_top = obj.getY() - obj.getHeight()/2; 
		var obj_right = obj.getX() + obj.getWidth()/2; 
		var obj_bottom = obj.getY() + obj.getHeight()/2; 
		var shape_left = shapes[i].getX() - shapes[i].getWidth()/2; 
		var shape_right = shapes[i].getX() + shapes[i].getWidth()/2; 
		var shape_bottom = shapes[i].getY() + shapes[i].getHeight()/2; 
		var shape_top = shapes[i].getY() - shapes[i].getHeight()/2; 

		// near the right side
		if( (obj_left < shape_right +20 )&&( obj_left > shape_right ) )
		{	
			obj.setX(shape_right + obj.getWidth()/2);
			layer.draw();
			return 'Y'; 
		}
		// near the left side
		else if(  (obj_right < shape_left )&&( obj_right > shape_left-20 ) )
		{
			obj.setX( shape_left - obj.getWidth()/2);
			layer.draw();
			return 'Y' ; 
		}
		// near the bottom side
		else if( (obj_top < shape_bottom +20 )&&( obj_top > shape_bottom ))
		{
			obj.setY( shape_bottom + obj.getHeight()/2 ); 
			layer.draw();
			return 'X'; 
		}
		// near the top side
		else if( (obj_bottom < shape_top )&&( obj_bottom > shape_top-20) )
		{
			obj.setY( shape_top - obj.getHeight()/2 );
			layer.draw();
			return 'X'; 
		}
		else 
		{	continue ; }
	}
	return false ; 
}

// 圖形在邊界時，彈回原位置
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
			|| (posY + height/2 > border_bottom) 
			|| (posX - width/2 < border_split_x && posX + width/2 > border_split_x))
		{	return true; 	}
	}
	else if( type == "Rect" )
	{
		width = shape.getWidth(); 
		height = shape.getHeight(); 
		if( (   posX - width/2 < border_left )
			|| (posX + width/2 > border_right ) 
			|| (posY - height/2 < border_top )
			|| (posY + height/2 > border_bottom) 
			|| (posX - width/2 < border_split_x && posX + width/2 > border_split_x) )
		{	return true; 	}
	}
	else if( type == "Circle")
	{	
		radius = shape.getRadius(); 
		if( (posX - radius < border_left )
			|| (posX + radius > border_right ) 
			|| (posY - radius < border_top )
			|| (posY + radius > border_bottom)  
			|| (posX - radius < border_split_x && posX + radius > border_split_x) )
		{	return true;	}
	}
	else if( type == "Wedge"  )
	{
		radius = shape.getRadius(); 
		if( (posX - radius/2 < border_left )
			|| (posX + radius/2 > border_right ) 
			|| (posY - radius/2 < border_top )
			|| (posY + radius/2 > border_bottom)  
			|| (posX - radius/2 < border_split_x && posX + radius/2 > border_split_x) )
		{	return true;	}
	}
	
	return false; 
}

function whether_in_used(element)
{
	var type = element.getClassName();
	var posX = element.getX() ; 
	var posY = element.getY(); 
	var width, radius ; 
	if( type == "Polygon")
	{	width = element.getAttr('width');	}
	else if( type == "Rect")
	{	width = element.getWidth();	}
	else if( type == "Wedge")
	{	width = height = element.getRadius();	}
	else if( type == "Circle")
	{	width = height = element.getRadius()*2;	}

	if( (posX - width/2 > border_left) && (posX + width/2 < border_split_x ))
    {	element.setAttr('is_used', true);	}
    else
    {	element.setAttr('is_used', false);	}
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
    shapes.forEach(set_offset);
    shapes.forEach(random_position);
    shapes.forEach(setWedgeOffset); 
    shapes.forEach(shape_mouse_event);
    layer.draw();
}

document.write('<script language="javascript" src="verify.js"></script>');




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
