/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var question_file; 
var correct_answer ; 



//var border_split_x = window.innerWidth/2 ;

function getQuestion(){
    var q_idx = Math.floor(Math.random()*6) ; // started from 0
    //alert("ques_A0"+(q_idx+1)+".txt"); // 1, 2, 3
    //var path = "file:///C:/Users/MY/Desktop/";
    //var file = "ques_A0"+(q_idx+1)+".txt"; // started from 1, as the index
    question_file = "ques_A0"+(q_idx+1)+".txt";
    
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
                drawQuestion(data, q_idx);
            }
        }
    }
    rawFile.send(null);
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
    shapes.forEach(shape_mouse_event);
}


function drawQuestion(data, q_idx){

    //var dataset = new Array();
    //dataset[0] = [[4, 350, 520, -120], [2, 250, 250, 0], [1, 275, 75, 0], [3, 350, 300, 0]];
    //dataset[1] = [[2, 300, 300, 0], [1, 0, 300, -20], [3, 400, 400, 0], [4, 300, 300, -90], [4, 300, 300, 90]];
    //dataset[2] = [[1, 450, 175, 0], [3, 330, 400, 0], [2, 250, 225, 0], [3, 520, 400, 0]];
    
    //alert(data);
    var marginInTeacher = 20 ; 
    var borderLeftInTeacher = window.innerWidth/4 ; 
    var borderTopInTeacher = margin ; 
    var borderRightInTeacher = window.innerWidth*3/4 ; 
    var borderBottomInTeacher = window.innerHeight-margin-margin-margin-margin ; 

    var stageInTeacher = new Kinetic.Stage({
            container: 'container',
            X:0, 
            Y:0, 
            width: window.innerWidth,
            height: borderBottomInTeacher
    });
    var layerInTeacher = new Kinetic.Layer({
            X:0, 
            Y:0, 
            width: window.innerWidth, 
            height: borderBottomInTeacher
    });

    var borderInTeacher = new Kinetic.Line({
            points: [borderLeftInTeacher, borderTopInTeacher, borderRightInTeacher, borderTopInTeacher, borderRightInTeacher, borderBottomInTeacher, borderLeftInTeacher, borderBottomInTeacher, borderLeftInTeacher, borderTopInTeacher], 
            stroke: 'blue', 
            strokeWidth: 2, 
            lineJoin: 'round', 
            dashArray: [20, 10]
    });
    layerInTeacher.add(borderInTeacher);
    
    for(var i=0; i<data.length; ++i)
        layerInTeacher.add(buildblock(parseInt(data[i][0]), parseInt(data[i][1]), parseInt(data[i][2]), parseInt(data[i][3])));

    // add the shapes to the layer
    stageInTeacher.add(layerInTeacher);
    //stage.show();

    var verinum = "A0"+(q_idx+1) ; // 1, 2, 3
    document.getElementById("getbutton").style.display = "none";
    document.getElementById("underline").innerHTML = '<h3>----Verifying Number = '+verinum+'</h3>';
    //document.write('<h3>----Verifying Number = '+verinum+'</h3>');
    //document.write('<script language="javascript" src="game.js"></script>');

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
                x: border_left+x,
                y: border_top+y,
                width: 80,
                height: 80,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#9e9e9e',
                cornerRadius: 10, 
                name: "shape" ,  
                //offset: [-border_left-x, -border_top-y],
                rotationDeg: r
            });
            return square;
        case 2:  //medium square
            var square = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 100,
                height: 100,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#9e9e9e',
                name: "shape" , 
                cornerRadius: 10, 
                rotationDeg: r
            });
            return square;
        case 3:  //large square
            var square = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 120,
                height: 120,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#9e9e9e',
                name: "shape" , 
                cornerRadius: 10, 
                rotationDeg: r
            });
            return square;
        case 4:  //short thin rect
            var rect = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 90,
                height: 60,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#ddd',
                name: "shape" , 
                cornerRadius: 10, 
                rotationDeg: r
            });
            return rect;
        case 5:  //thin rect
            var rect = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 120,
                height: 60,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#ddd',
                name: "shape" , 
                cornerRadius: 10, 
                rotationDeg: r
            });
            return rect;
        case 6:  //long thin rect
            var rect = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 150,
                height: 60,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#ddd',
                name: "shape" , 
                cornerRadius: 10, 
                rotationDeg: r
            });
            return rect;
        case 7:  //regular rect
            var rect = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 120,
                height: 80,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#ddd',
                name: "shape" , 
                cornerRadius: 10, 
                rotationDeg: r
            });
            return rect;
        case 8:  //short fat rect
            var rect = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 90,
                height: 100,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#ddd',
                name: "shape" , 
                cornerRadius: 10, 
                rotationDeg: r
            });
            return rect;
        case 9:  //fat rect
            var rect = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 120,
                height: 100,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#ddd',
                name: "shape" , 
                cornerRadius: 10, 
                rotationDeg: r
            });
            return rect;
        case 10:  //long fat rect
            var rect = new Kinetic.Rect({
                x: border_left+x,
                y: border_top+y,
                width: 150,
                height: 100,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#ddd',
                name: "shape" , 
                cornerRadius: 10, 
                rotationDeg: r
            });
            return rect;
        
        // 11~20 are circles
        
        case 11:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 15,
                fill: 'red',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1
            });
            return circle;
        case 12:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 20,
                fill: 'red',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1
            });
            return circle;
        case 13:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 25,
                fill: 'red',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1
            });
            return circle;
        case 14:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 30,
                fill: 'red',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1
            });
            return circle;
        case 15:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 40,
                fill: 'red',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1
            });
            return circle;
        case 16:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 50,
                fill: 'red',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1
            });
            return circle;
        case 17:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 60,
                fill: 'red',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1
            });
            return circle;
        case 18:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 75,
                fill: 'red',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1
            });
            return circle;
        case 19:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 90,
                fill: 'red',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1
            });
            return circle;
        case 20:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 100,
                fill: 'red',
                name: "shape" , 
                stroke: 'black',
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
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
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
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
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
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
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
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
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
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return wedge;
        case 26:  //small wedge -30
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 90,
                angleDeg: 30,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return wedge;
        case 27:  //small wedge -60
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 90,
                angleDeg: 60,
                fill: 'green',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return wedge;
        case 28:  //small wedge -90
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 90,
                angleDeg: 90,
                fill: 'green',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return wedge;
        case 29:  //small wedge -120
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 90,
                angleDeg: 120,
                fill: 'green',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return wedge;
        case 30:  //small wedge -150
            var wedge = new Kinetic.Wedge({
                x: border_left+x,
                y: border_top+y,
                radius: 90,
                angleDeg: 150,
                fill: 'green',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return wedge;
        
        // 31~50 are triangles
        
        case 31:  //triangle1
            var tri = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 90, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 32:  //triangle2
            var tri = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 120, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 33:  //triangle3
            var tri = new Kinetic.Polygon({
                points: [0, 0, 0, 120, 90, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 34:  //triangle4
            var tri = new Kinetic.Polygon({
                points: [0, 0, 0, 100, 110, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 35:  //triangle5
            var tri = new Kinetic.Polygon({
                points: [0, 0, 0, 150, 120, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 36:  //triangle6
            var tri = new Kinetic.Polygon({
                points: [0, 0, -20, 80, 80, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 37:  //triangle7
            var tri = new Kinetic.Polygon({
                points: [0, 0, -20, 100, 80, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 38:  //triangle8
            var tri = new Kinetic.Polygon({
                points: [0, 0, -20, 100, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 39:  //triangle9
            var tri = new Kinetic.Polygon({
                points: [0, 0, -20, 80, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 40:  //triangle10
            var tri = new Kinetic.Polygon({
                points: [0, 0, -20, 60, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 41:  //triangle11
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 80, 80, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 42:  //triangle12
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 100, 80, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 43:  //triangle13
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 100, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 44:  //triangle14
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 80, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 45:  //triangle15
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 100, 100, 20],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 46:  //triangle16
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 100, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 47:  //triangle17
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 120, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 48:  //triangle18
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 100, 120, 20],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 49:  //triangle19
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 100, 100, 50],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        case 50:  //triangle20
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 100, 100, -20],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return tri;
        
        // 51~70 are trapezoids
        
        case 51:  //trapezoid1
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 120, 90, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 52:  //trapezoid2
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 130, 90, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 53:  //trapezoid3
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 150, 90, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 54:  //trapezoid4
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 100, 90, 80, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 55:  //trapezoid5
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 50, 90, 30, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 56:  //trapezoid6
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 120, 80, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 57:  //trapezoid7
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 130, 80, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 58:  //trapezoid8
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 150, 80, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 59:  //trapezoid9
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 100, 80, 80, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 60:  //trapezoid10
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 50, 80, 30, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 61:  //trapezoid11
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 100, 90, 120, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 62:  //trapezoid12
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 100, 90, 130, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 63:  //trapezoid13
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 100, 90, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 64:  //trapezoid14
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 80, 90, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 65:  //trapezoid15
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 30, 90, 50, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 66:  //trapezoid16
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 100, 80, 120, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 67:  //trapezoid17
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 100, 80, 130, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 68:  //trapezoid18
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 100, 80, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 69:  //trapezoid19
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 80, 80, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return trape;
        case 70:  //trapezoid20
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 30, 80, 50, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
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
                name: "shape" , 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return poly;

    }
}
document.write('<script language="javascript" src="verify.js"></script>');
/*
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
                var block = allText.split("\n");
                for(var i=0; i<block.length; ++i)
                    data[i] = block[i].split(" ");
                return data;
            }
        }
    }
    rawFile.send(null);
}
*/
/*
function setText(filePath) {
        var output = ""; //placeholder for text output
        if(filePath.files && filePath.files[0]) {           
            var reader = new FileReader();
            reader.onload = function (e) {
                output = e.target.result;
                document.write('TESTING');
                document.write(output);
            };//end onload()
            reader.readAsText(filePath.files[0]);
        }
}
*/