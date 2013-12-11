/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var margin = 20 ; 
var border_left = window.innerWidth/4 ; 
var border_top = margin ; 
var border_right = window.innerWidth*3/4 ; 
var border_bottom = window.innerHeight-margin*4 ; 

//var border_split_x = window.innerWidth/2 ;

function getQuestion(){
    var q_idx = Math.floor(Math.random()*6) ; // started from 0
    //alert("ques_A0"+(q_idx+1)+".txt"); // 1, 2, 3
    //var path = "file:///C:/Users/MY/Desktop/";
    var file = "ques_A0"+(q_idx+1)+".txt"; // started from 1, as the index


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
    

    var stageInTeacher = new Kinetic.Stage({
            container: 'container',
            X:0, 
            Y:0, 
            width: window.innerWidth,
            height: border_bottom
    });
    var layerInTeacher = new Kinetic.Layer({
            X:0, 
            Y:0, 
            width: window.innerWidth, 
            height: border_bottom
    });

    var borderInTeacher = new Kinetic.Line({
            points: [border_left, border_top, border_right, border_top, border_right, border_bottom, border_left, border_bottom, border_left, border_top], 
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


    var verinum = "A0"+(q_idx+1) ; // 1, 2, 3
    document.getElementById("getbutton").style.display = "none";
    document.getElementById("underline").innerHTML = '<h3>----Verifying Number = '+verinum+'</h3>';
    //document.write('<h3>----Verifying Number = '+verinum+'</h3>');
    //document.write('<script language="javascript" src="game.js"></script>');

}



