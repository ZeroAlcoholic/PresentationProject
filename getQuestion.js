/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var correct_answer ; 

//var border_split_x = window.innerWidth/2 ;

function getQuestion(){
	
	var q_idx = Math.floor(Math.random()*5) ; // 0, 1, 2

    // question_file: define in "init.js"
    question_file = "ques_A0"+(q_idx+1)+".txt"; // 1, 2, 3
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
                {
                    correct_answer[i] = correct_answer[i].substr(0, correct_answer[i].length-1); 
                    data[i] = block[i].split(" ");
                }
                drawQuestion(data, q_idx);
            }
        }
    }
    rawFile.send(null);

}

function drawQuestion(data, q_idx){
    for(var i=0; i<data.length; ++i)
    {
        layer.add( buildblock(parseInt(data[i][0]), parseInt(data[i][1]), parseInt(data[i][2]), parseInt(data[i][3])) );
    }
    
    // add the shapes to the layer
    stage.add(layer);

    // shapes: define in "init.js"
    shapes = stage.get(".shape");
    shapes.forEach(random_position);
    layer.draw();
    shapes.forEach(shape_mouse_event);


    var verinum = "A0"+(q_idx+1) ; // 1, 2, 3
    document.getElementById("getbutton").style.display = "none";
    document.getElementById("underline").innerHTML = '<h3>----Verifying Number = '+verinum+'</h3>';

}
/*
function get_ran_ques(){
    //return 2;
    return Math.floor(Math.random()*3);
}
*/
function buildblock(type, x, y, r){
    switch(type){
        
        // 1~10 are squares and rectangles
        
        case 1:  //square
            var square = new Kinetic.Rect({
                x: border_left + x,
                y: border_top + y,
                width: 150,
                height: 150,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#9e9e9e',
                cornerRadius: 10, 
                name: "shape" , 
                number: 0, 
                
                id: 1, 
                //offset: [self.width/2, self.height/2],
                rotationDeg: r
            });
            return square;
        case 2:  //medium square
            var square = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 200,
                height: 200,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#9e9e9e',
                cornerRadius: 10, 
                name: "shape" , 
                number: 0, 
                id: 2, 
                

                //offset: [-border_left-x, -border_top-y],
                rotationDeg: r
            });
            return square;
        case 3:  //large square
            var square = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 250,
                height: 250,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#9e9e9e',
                cornerRadius: 10,
                name: "shape" , 
                number: 0, 
                id: 3, 
                
                //offset: [-border_left-x, -border_top-y],
                rotationDeg: r
            });
            return square;
        case 4:  //regular rect
            var rect = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 200,
                height: 100,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#ddd',
                cornerRadius: 10, 
                name: "shape", 
                number: 1, 
                id: 4, 
                
                //offset: [-border_left-x, -border_top-y],
                rotationDeg: r
            });
            return rect;
        case 5:  //short rect
            var rect = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 150,
                height: 100,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#ddd',
                cornerRadius: 10, 
                name: "shape", 
                number: 1, 
                id: 5, 
                
                //offset: [-border_left-x, -border_top-y],
                rotationDeg: r
            });
            return rect;
        case 6:  //thin rect
            var rect = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 200,
                height: 80,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#ddd',
                cornerRadius: 10, 
                name: "shape", 
                number: 1, 
                id: 6, 
                
                //offset: [-border_left-x, -border_top-y],
                rotationDeg: r
            });
            return rect;
        case 7:  //long rect
            var rect = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 250,
                height: 100,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#ddd',
                cornerRadius: 10, 
                name: "shape", 
                number: 1, 
                id: 7,
                
                //offset: [-border_left-x, -border_top-y],
                rotationDeg: r
            });
            return rect;
        case 8:  //fat rect
            var rect = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 200,
                height: 120,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#ddd',
                cornerRadius: 10, 
                name: "shape", 
                number: 1, 
                id: 8, 
                
                //offset: [-border_left-x, -border_top-y],
                rotationDeg: r
            });
            return rect;
        case 9:  //big rect
            var rect = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 220,
                height: 120,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#ddd',
                cornerRadius: 10, 
                name: "shape", 
                number: 1, 
                id: 9,
                
                //offset: [-border_left-x, -border_top-y],
                rotationDeg: r
            });
            return rect;
        case 10:  //bif fat rect
            var rect = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 250,
                height: 120,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#ddd',
                cornerRadius: 10, 
                name: "shape", 
                number: 1, 
                
                id: 10,
                //offset: [-border_left-x, -border_top-y],
                rotationDeg: r
            });
            return rect;
        
        // 11~20 are circles
        
        case 11:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 75,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                id: 11,
                strokeWidth: 1
            });
            return circle;
        case 12:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 85,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                id: 12,
                strokeWidth: 1
            });
            return circle;
        case 13:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 95,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                id: 13,
                strokeWidth: 1
            });
            return circle;
        case 14:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 105,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                id: 14,
                strokeWidth: 1
            });
            return circle;
        case 15:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 115,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                id: 15,
                strokeWidth: 1
            });
            return circle;
        case 16:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 125,
                fill: 'red',
                stroke: 'black',
                name: "shape" ,
                id: 16, 
                strokeWidth: 1
            });
            return circle;
        case 17:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 135,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                id: 17,
                strokeWidth: 1
            });
            return circle;
        case 18:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 145,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                id: 18,
                strokeWidth: 1
            });
            return circle;
        case 19:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 155,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                id: 19,
                strokeWidth: 1
            });
            return circle;
        case 20:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 165,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                id: 20,
                strokeWidth: 1
            });
            return circle;
        
        // 21~30 are wedges
        
        case 21:  //wedge -30
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 150,
                angleDeg: 30,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 21,
                rotationDeg: r
            });
            return wedge;
        case 22:  //wedge -60
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 150,
                angleDeg: 60,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 22,
                rotationDeg: r
            });
            return wedge;
        case 23:  //wedge -90
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 150,
                angleDeg: 90,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" ,
                id: 23, 
                rotationDeg: r
            });
            return wedge;
        case 24:  //wedge -120
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 150,
                angleDeg: 120,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 24,
                rotationDeg: r
            });
            return wedge;
        case 25:  //wedge -150
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 150,
                angleDeg: 150,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 25,
                rotationDeg: r
            });
            return wedge;
        case 26:  //big wedge -30
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 180,
                angleDeg: 30,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 26,
                rotationDeg: r
            });
            return wedge;
        case 27:  //big wedge -60
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 180,
                angleDeg: 60,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 27,
                rotationDeg: r
            });
            return wedge;
        case 28:  //big wedge -90
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 180,
                angleDeg: 90,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 28,
                rotationDeg: r
            });
            return wedge;
        case 29:  //big wedge -120
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 180,
                angleDeg: 120,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 29,
                rotationDeg: r
            });
            return wedge;
        case 30:  //big wedge -150
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 180,
                angleDeg: 150,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 30,
                rotationDeg: r
            });
            return wedge;
        
        // 31~50 are triangles
        
        case 31:  //triangle1
            var tri = new Kinetic.Polygon({
                points: [0, 0, 0, 150, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 31, 
                rotationDeg: r
            });
            return tri;
        case 32:  //triangle2
            var tri = new Kinetic.Polygon({
                points: [0, 0, 0, 150, 180, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 32, 
                rotationDeg: r
            });
            return tri;
        case 33:  //triangle3
            var tri = new Kinetic.Polygon({
                points: [0, 0, 0, 150, 200, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" ,
                id: 33,  
                rotationDeg: r
            });
            return tri;
        case 34:  //triangle4
            var tri = new Kinetic.Polygon({
                points: [0, 0, 0, 180, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 34, 
                rotationDeg: r
            });
            return tri;
        case 35:  //triangle5
            var tri = new Kinetic.Polygon({
                points: [0, 0, 0, 200, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 35, 
                rotationDeg: r
            });
            return tri;
        case 36:  //triangle6
            var tri = new Kinetic.Polygon({
                points: [0, 0, -20, 150, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 36, 
                rotationDeg: r
            });
            return tri;
        case 37:  //triangle7
            var tri = new Kinetic.Polygon({
                points: [0, 0, -20, 180, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 37, 
                rotationDeg: r
            });
            return tri;
        case 38:  //triangle8
            var tri = new Kinetic.Polygon({
                points: [0, 0, -20, 180, 180, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 38, 
                rotationDeg: r
            });
            return tri;
        case 39:  //triangle9
            var tri = new Kinetic.Polygon({
                points: [0, 0, -20, 120, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 39, 
                rotationDeg: r
            });
            return tri;
        case 40:  //triangle10
            var tri = new Kinetic.Polygon({
                points: [0, 0, -20, 120, 180, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 40, 
                rotationDeg: r
            });
            return tri;
        case 41:  //triangle11
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 150, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 41, 
                rotationDeg: r
            });
            return tri;
        case 42:  //triangle12
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 120, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 42, 
                rotationDeg: r
            });
            return tri;
        case 43:  //triangle13
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 180, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 43, 
                rotationDeg: r
            });
            return tri;
        case 44:  //triangle14
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 180, 180, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 44, 
                rotationDeg: r
            });
            return tri;
        case 45:  //triangle15
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 150, 150, 20],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 45, 
                rotationDeg: r
            });
            return tri;
        case 46:  //triangle16
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 150, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 46, 
                rotationDeg: r
            });
            return tri;
        case 47:  //triangle17
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 180, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 47, 
                rotationDeg: r
            });
            return tri;
        case 48:  //triangle18
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 180, 150, 20],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 48, 
                rotationDeg: r
            });
            return tri;
        case 49:  //triangle19
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 150, 150, 50],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 49, 
                rotationDeg: r
            });
            return tri;
        case 50:  //triangle20
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 150, 150, -20],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" ,
                id: 50,  
                rotationDeg: r
            });
            return tri;
        
        // 51~70 are trapezoids
        
        case 51:  //trapezoid1
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 150, 200, 150, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" ,
                id: 51,  
                rotationDeg: r
            });
            return trape;
        case 52:  //trapezoid2
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 150, 220, 150, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 52, 
                rotationDeg: r
            });
            return trape;
        case 53:  //trapezoid3
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 150, 180, 150, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 53, 
                rotationDeg: r
            });
            return trape;
        case 54:  //trapezoid4
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 150, 200, 150, 120, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 54, 
                rotationDeg: r
            });
            return trape;
        case 55:  //trapezoid5
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 150, 200, 150, 180, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 55, 
                rotationDeg: r
            });
            return trape;
        case 56:  //trapezoid6
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 120, 200, 120, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 56, 
                rotationDeg: r
            });
            return trape;
        case 57:  //trapezoid7
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 120, 220, 120, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 57, 
                rotationDeg: r
            });
            return trape;
        case 58:  //trapezoid8
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 120, 180, 120, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 58, 
                rotationDeg: r
            });
            return trape;
        case 59:  //trapezoid9
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 120, 200, 120, 120, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 59, 
                rotationDeg: r
            });
            return trape;
        case 60:  //trapezoid10
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 120, 200, 120, 180, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 60, 
                rotationDeg: r
            });
            return trape;
        case 61:  //trapezoid11
            var trape = new Kinetic.Polygon({
                points: [50, 0, 0, 150, 200, 150, 200, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 61, 
                rotationDeg: r
            });
            return trape;
        case 62:  //trapezoid12
            var trape = new Kinetic.Polygon({
                points: [50, 0, 20, 150, 200, 150, 200, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 62, 
                rotationDeg: r
            });
            return trape;
        case 63:  //trapezoid13
            var trape = new Kinetic.Polygon({
                points: [80, 0, 0, 150, 230, 150, 230, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" ,
                id: 63,  
                rotationDeg: r
            });
            return trape;
        case 64:  //trapezoid14
            var trape = new Kinetic.Polygon({
                points: [70, 0, 0, 150, 200, 150, 200, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 64, 
                rotationDeg: r
            });
            return trape;
        case 65:  //trapezoid15
            var trape = new Kinetic.Polygon({
                points: [30, 0, 0, 150, 200, 150, 200, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 65, 
                rotationDeg: r
            });
            return trape;
        case 66:  //trapezoid16
            var trape = new Kinetic.Polygon({
                points: [50, 0, 0, 120, 200, 120, 200, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 66, 
                rotationDeg: r
            });
            return trape;
        case 67:  //trapezoid17
            var trape = new Kinetic.Polygon({
                points: [70, 0, 0, 120, 200, 120, 200, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 67, 
                rotationDeg: r
            });
            return trape;
        case 68:  //trapezoid18
            var trape = new Kinetic.Polygon({
                points: [30, 0, 0, 120, 200, 120, 200, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 68, 
                rotationDeg: r
            });
            return trape;
        case 69:  //trapezoid19
            var trape = new Kinetic.Polygon({
                points: [50, 0, 20, 120, 200, 120, 200, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 69, 
                rotationDeg: r
            });
            return trape;
        case 70:  //trapezoid20
            var trape = new Kinetic.Polygon({
                points: [80, 0, 0, 120, 230, 120, 230, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                id: 70, 
                rotationDeg: r
            });
            return trape;
            
        // special
            
        case 99:  //polygon
            var poly = new Kinetic.Polygon({
                points: [-57, 282, -67, 190, 70, -17, 160, 89, 160, 139, 80, 53],
                x: border_left+x,
                y: border_top+y,
                fill: '#00D2FF',
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" ,
                id: 99,  
                rotationDeg: r
            });
            return poly;
    }
}
document.write('<script language="javascript" src="verify.js"></script>');