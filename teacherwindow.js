/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/* *** View *** */
var margin = 20 ; 
var border_left = window.innerWidth/4 ; 
var border_top = margin ; 
var border_right = window.innerWidth*3/4 ; 
var border_bottom = window.innerHeight-margin-margin-margin-margin ; 
//var border_split_x = window.innerWidth/2 ;


function getQuestion(){
    var q_idx = Math.floor(Math.random()*5) ; // 0, 1, 2
    //alert("ques_A0"+(q_idx+1)+".txt"); // 1, 2, 3
    //var path = "file:///C:/Users/MY/Desktop/";
    var file = "ques_A0"+(q_idx+1)+".txt"; // 1, 2, 3
    
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status === 0)
            {
                var allText = rawFile.responseText;
                //alert(allText);
                var block = allText.split("\n");
                var data = Array(block.length);
                for(var i=0; i<block.length; ++i)
                    data[i] = block[i].split(" ");
                drawQuestion(data, q_idx);
            }
        }
    }
    rawFile.send(null);
}

function drawQuestion(data, q_idx){

    //var dataset = new Array();
    //dataset[0] = [[4, 350, 520, -120], [2, 250, 250, 0], [1, 275, 75, 0], [3, 350, 300, 0]];
    //dataset[1] = [[2, 300, 300, 0], [1, 0, 300, -20], [3, 400, 400, 0], [4, 300, 300, -90], [4, 300, 300, 90]];
    //dataset[2] = [[1, 450, 175, 0], [3, 330, 400, 0], [2, 250, 225, 0], [3, 520, 400, 0]];
    
    //alert(data);

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
            stroke: 'blue', 
            strokeWidth: 2, 
            lineJoin: 'round', 
            dashArray: [20, 10]
    });
    layer.add(border);
    
    for(var i=0; i<data.length; ++i)
    {
        layer.add( buildblock(parseInt(data[i][0]), parseInt(data[i][1]), parseInt(data[i][2]), parseInt(data[i][3])) );
    }
    
    // add the shapes to the layer
    stage.add(layer);

    /*
    for (var i = 0; i < shapes.length; i++) {
        random_num_texture = Math.floor(Math.random() * 8) ; 

        shapes[i].setFill( "#000000" );
        console.log( shapes[i]);
        layer.draw();
    };
*/
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
                width: 150,
                height: 150,
                stroke: '#555',
                strokeWidth: 1,
                fill: '#9e9e9e',
                cornerRadius: 10, 
                name: "shape" , 
                number: 0, 
                is_used: false, 
                //offset: [-border_left-x, -border_top-y],
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
                is_used: false, 
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
                is_used: false, 
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
                is_used: false,
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
                is_used: false, 
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
                is_used: false, 
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
                is_used: false, 
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
                is_used: false, 
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
                is_used: false, 
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
                is_used: false, 
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
                rotationDeg: r
            });
            return poly;

    }
}
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