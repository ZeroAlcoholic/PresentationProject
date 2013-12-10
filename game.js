
/* *** Controller *** */

// set the positions of shapes
var shapes = stage.get(".shape");

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



