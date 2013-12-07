
/* *** Controller *** */

// set the positions of shapes
var shapes = stage.get(".shape");
/*
for(var i=0; i< shapes.length; i++)
{
	shapes[i].setX( random_position(window.innerWidth/2+shapes[i].getWidth()/2+10, border_right - shapes[i].getWidth()/2-10) );
	shapes[i].setY( random_position(margin+shapes[i].getHeight()/2+10, border_bottom - shapes[i].getHeight()/2-10 ) );


	layer.draw(); 
}

shapes.forEach(shape_mouse_event);
*/
//events control!
/*
group_mess.on('click', function(evt){
	var shape = evt.targetNode ; 
	console.log(shape.getAttrs());
	if( shape.getName() == "shape")
	{
		move_to_group_ans(shape); 
	}
});
group_ans.on('click', function(evt){
	var shape = evt.targetNode ; 
	console.log(shape.getLevel());
	if( shape.getName() == "shape")
	{
		move_to_group_ans(shape); 
	}
});

*/
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





function detect_shape_collide(a, b) { // a and b are your objects
   	return !(
	    ((a.getY() + a.getHeight()) < (b.getY())) ||
	    (a.getY() > (b.y + b.getHeight())) ||
	    ((a.getX() + a.getWidth()) < b.getX()) ||
	    (a.getX() > (b.getX() + b.getWidth()))
   	);
}



