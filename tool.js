/* *** Model *** */

// 讓題目給的圖形隨意排列在pool裡
function random_position(element, index, array){
	var x_M, x_m, y_M, y_m; 
	var type = element.getClassName();
	if( type == "Polygon" || type == "Rect" )
	{
		x_M = border_right - element.getWidth() - 10; 
		x_m = border_split_x + 10; 
		y_M = border_bottom - element.getHeight() - 10 ;
		y_m = border_top + 10; 
	}
	else if( type == "Circle" || type == "Wedge"  )
	{
		x_M = border_right - element.getRadius() - 10; 
		x_m = border_split_x + element.getRadius() + 10; 
		y_M = border_bottom - element.getRadius() - 10 ;
		y_m = border_top + element.getRadius() + 10; 
	}

	element.setX( Math.random() * (x_M - x_m) + x_m );
	element.setY( Math.random() * (y_M - y_m) + y_m );
}
// 滑鼠點選圖形時的觸發事件定義
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
  		element.rotate(Math.PI/6); 
  	});
}

// 使圖形可以被拖曳 ... 在按下 開始計時 後
function set_to_draggable(element, index, array)
{
	element.setDraggable( true);
}

// 使圖形不可被拖曳 ... 在按下 完成 後
function set_to_undraggable(element, index, array)
{
	element.setDraggable(false);
}

// 題目可能會多給，來判斷該圖形是否有被拉出pool
function whether_in_used(obj)
{
	if( (obj.getX()-obj.getWidth()/2 > border_left) && (obj.getX() + obj.getWidth()/2 < border_split_x ))
	{
		obj.setAttr('is_used', true);
	}
	else
	{
		obj.setAttr('is_used', false);
	}
}
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
	if( type == "Polygon" || type == "Rect" )
	{
		if( (shape.getX() < border_left )
			|| (shape.getX()+shape.getWidth() > border_right ) 
			|| (shape.getY() < border_top )
			|| (shape.getY()+shape.getHeight() > border_bottom) 
			|| ((shape.getX()< border_split_x) && (shape.getX()+shape.getWidth() > border_split_x)) )
		{	return true; 	}
		/*
		if( (shape.getX()-shape.getWidth()/2 < border_left )
			|| (shape.getX()+shape.getWidth()/2 > border_right ) 
			|| (shape.getY()-shape.getHeight()/2 < border_top )
			|| (shape.getY()+shape.getHeight()/2 > border_bottom) 
			|| ((shape.getX()-shape.getWidth()/2< border_split_x) && (shape.getX()+shape.getWidth()/2> border_split_x)) )
		{	return true; 	}
		*/
	}
	else if( type == "Circle" || type == "Wedge"  )
	{
		if( (shape.getX()-shape.getRadius()/2 < border_left )
			|| (shape.getX()+shape.getRadius()/2 > border_right ) 
			|| (shape.getY()-shape.getRadius()/2 < border_top )
			|| (shape.getY()+shape.getRadius()/2 > border_bottom) 
			|| ((shape.getX()-shape.getRadius()/2< border_split_x) && (shape.getX()+shape.getRadius()/2> border_split_x)) )
		{	return true;	}
	}
	
	return false; 
}

//將使用過的（不在pool裡的）圖形，其資料存進 file
function save_to_file()
{
	var textToWrite = "";
	for(var i=0; i<shapes.length; i++)
	{
		if( shapes[i].getAttr('is_used') )
		{
			if( textToWrite != "" )
			{
				textToWrite += "\n";  
			}
			textToWrite += shapes[i].getAttr('number') ;
			textToWrite += " "; 
			textToWrite += shapes[i].getX() ; 
			textToWrite += " ";  
			textToWrite += shapes[i].getY() ; 
			textToWrite += " " ; 
			textToWrite += shapes[i].getRotationDeg(); 
		}
	}
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = "answer.txt";

	//Try to write file on server
	var ansdata = new FormData();
	ansdata.append("ans" , textToWrite);
	var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
	xhr.open( 'POST', './saver.php', true );
	xhr.send(ansdata);
	console.log(textToWrite);
	console.log(xhr)
	
	
	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	//downloadLink.click();
}
//我也不懂XDDDD
function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}
/*
function loadFileAsText()
{
	var fileToLoad = document.getElementById("fileToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("inputTextToSave").value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}
*/



document.write('<script language="javascript" src="game.js"></script>');
