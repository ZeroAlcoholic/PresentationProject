// 來比較是否兩檔案的資料內容是一樣的
function error_compare(in1,in2,err){
    if(in1-in2>err || in2-in1>err)
        return false;
    return true;
}
 
function rotate_compare(d1,d2){
    if(!d1[0]==d2[0])
        return false;
    //circle
    else if(d1[0]>=11 && d1[0]<=20)
        return true;
    //square
    else if(d1[0]>=1 && d1[0]<=3){
        var result = false;
        result = result || error_compare(Math.abs(d1[3]-d2[3]),0,1);
        result = result || error_compare(Math.abs(d1[3]-d2[3]),90,1);
        result = result || error_compare(Math.abs(d1[3]-d2[3]),180,1);
        result = result || error_compare(Math.abs(d1[3]-d2[3]),270,1);
        return result;
    //rectangle
    }else if(d1[0]>=4 && d1[0]<=10){
        var result = false;
        result = result || error_compare(Math.abs(d1[3]-d2[3]),0,1);
        result = result || error_compare(Math.abs(d1[3]-d2[3]),180,1);
        return result;
    }else
        return error_compare(d1[3],d2[3],1);
}

function sort_function(a,b){
	var data1 = a.split(" ");
	var data2 = b.split(" ");
	if(data1[0]!=data2[0])
		return data1[0] - data2[0];
	else if(data1[3]!=data2[3])
		return data1[3] - data2[3];
	else if(data1[1]!=data2[1])
		return data1[1] - data2[1];
	else
		return data1[2] - data2[2];
}

function standard_Deg(a) {
	while(a>180) {
		a = a - 360;
	}
	return a;
}

function compare_data()
{
    var textToWrite = "";
    // in the form of "a b c d\n"
    for(var i=0; i<shapes.length; i++)
    {
        if( textToWrite != "" )
        {
            textToWrite += "\n";  
        }
        textToWrite += shapes[i].getAttr('id') ;
        textToWrite += " "; 
        textToWrite += shapes[i].getX() ; 
        textToWrite += " ";  
        textToWrite += shapes[i].getY() ; 
        textToWrite += " " ; 
        textToWrite += standard_Deg(shapes[i].getRotationDeg()); 
    }

    //var block1 = .split("\n");
    var block2 = textToWrite.split("\n");
    var block1 = correct_answer; 
     
    if (block1.length!=block2.length){
        return false;
    }
    else {
        var result = true;
        var error = 50;
         
        //排序
        block1.sort(sort_function);
        block2.sort(sort_function);
        
 
        //分解
        var data1 = new Array();
        var data2 = new Array();
        for (var i=0; i<block1.length; i++)
            data1.push(block1[i].split(" "));
        for (var i=0; i<block2.length; i++)
            data2.push(block2[i].split(" "));
         
        //處理相對位置
        var ref_x1 = data1[0][1];
        var ref_y1 = data1[0][2];
        var ref_x2 = data2[0][1];
        var ref_y2 = data2[0][2];
         
        for (var i=0; i<block1.length; i++) {
            data1[i][1] = data1[i][1]-ref_x1;
            data1[i][2] = data1[i][2]-ref_y1;
        }
        for (var i=0; i<block2.length; i++) {
            data2[i][1] = data2[i][1]-ref_x2;
            data2[i][2] = data2[i][2]-ref_y2;
        }
		
        //比較
        for (var i=0; i<block1.length; i++)
            result = result && (data1[i][0]==data2[i][0]);
		for (var i=0; i<block1.length; i++)
            result = result && error_compare(data1[i][1],data2[i][1],error);
		for (var i=0; i<block1.length; i++)
            result = result && error_compare(data1[i][2],data2[i][2],error);
		for (var i=0; i<block1.length; i++)
            result = result && rotate_compare(data1[i],data2[i]);
        return result;
    }
}

$(document).ready( function() {
    $("#verify").click(function(){
            $.get(question_file, function(){
                var result = compare_data();
                if(result) {

                    alert("Congratulation! You have done your puzzle!");
                    stopCount();
                }
                else {
                    alert("Your answer is FALSE. Please continue your work.")
                }
            },"text");
    });
}); 
 
