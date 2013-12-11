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
                id: 1,
                is_used: false,   
                offset: [40, 40],
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
                id: 2,  
                is_used: false,
                offset: [50, 50],
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
                id: 3,
                is_used: false,
                offset: [60, 60],
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
                id: 4, 
                is_used: false,
                offset: [45, 30],
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
                id: 5, 
                is_used: false,
                offset: [60, 30],
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
                id: 6, 
                is_used: false,
                offset: [75, 30],
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
                id: 7, 
                is_used: false,
                offset: [60, 40],
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
                id:8, 
                is_used: false,
                offset: [45, 50],
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
                id: 9, 
                is_used: false,
                offset: [60, 50],
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
                id: 10,
                is_used: false,
                offset: [75, 50],
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
                id: 11,
                is_used: false,
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
                id: 12,
                is_used: false,
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
                id: 13,
                is_used: false,
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
                id: 14,
                is_used: false,
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
                id: 15,
                is_used: false,
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
                id: 16,
                is_used: false,
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
                id: 17,
                is_used: false,
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
                id: 18,
                is_used: false,
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
                id: 19,
                is_used: false,
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
                id: 20,
                is_used: false,
                stroke: 'black',
                strokeWidth: 1
            });
            return circle;
        
        // 21~30 are wedges
        
        case 21:  //wedge -30
            var wedge = new Kinetic.Wedge({
                x: border_left + x,
                y: border_top + y,
                radius: 150,
                angleDeg: 30,
                fill: 'green',
                name: "shape" ,
                id: 21, 
                is_used: false, 
                offset: [75, 75/6], 
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
                id: 22,
                is_used: false,
                offset: [75, 25], 
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
                id: 23,
                is_used: false,
                offset: [75, 75/2],
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
                id: 24,
                is_used: false,
                offset: [75, 50],
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
                id: 25, 
                is_used: false,
                offset: [75, 75/2],
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
                name: "shape", 
                id: 26,
                is_used: false,
                offset: [45, 75/6],
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
                id: 27,
                is_used: false,
                offset: [45, 25],
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
                id: 28,
                is_used: false,
                offset: [45, 75/2],
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
                id: 29, 
                is_used: false,
                offset: [45, 50],
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
                id: 30,
                is_used: false,
                offset: [45, 750/12],
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
                id: 31,
                is_used: false,
                offset: [45, 45], 
                width: 90, 
                height: 90, 
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
                id: 32, 
                is_used: false,
                offset: [60, 45], 
                width: 120, 
                height: 90,
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
                id: 33,
                is_used: false,
                offset: [45, 60], 
                width: 90, 
                height: 120,
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
                id: 34, 
                is_used: false,
                offset: [55, 50], 
                width: 110, 
                height: 100,
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
                id: 35,
                is_used: false,
                offset: [60, 75], 
                width: 120, 
                height: 150,
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
                id: 36, 
                is_used: false,
                offset: [30, 40], 
                width: 100, 
                height: 80,
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
                name: "shape", 
                id: 37, 
                is_used: false,
                offset: [30, 50], 
                width: 100, 
                height: 100,
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
                id: 38, 
                is_used: false,
                offset: [40, 50], 
                width: 120, 
                height: 100,
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
                id: 39,  
                is_used: false,
                offset: [30, 40], 
                width: 120, 
                height: 80,
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
                id: 40, 
                is_used: false,
                offset: [40, 30], 
                width: 120, 
                height: 60,
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
                id: 41,
                is_used: false,
                offset: [40, 40], 
                width: 80, 
                height: 80, 
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
                id: 42, 
                is_used: false,
                offset: [40, 50], 
                width: 80, 
                height: 100,
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
                id: 43, 
                is_used: false,
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
                id: 44, 
                is_used: false,
                offset: [50, 40], 
                width: 100, 
                height: 80,
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
                id: 45, 
                is_used: false,
                offset: [50, 50], 
                width: 100, 
                height: 100,
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
                id: 46, 
                is_used: false,
                offset: [50, 50], 
                width: 100, 
                height: 100,
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
                id: 47, 
                is_used: false,
                offset: [50, 60], 
                width: 100, 
                height: 120,
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
                id: 48, 
                is_used: false,
                offset: [60, 50], 
                width: 120, 
                height: 100,
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
                id: 49, 
                is_used: false, 
                offset: [50, 50], 
                width: 100, 
                height: 100,
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
                id: 50, 
                is_used: false,
                offset: [50, 40], 
                width: 100, 
                height: 120,
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
                id: 51, 
                is_used: false,
                width: 120, 
                height: 90,
                offset: [55, 45],  
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
                id: 52, 
                is_used: false,
                width: 130, 
                height: 90, 
                offset: [60, 45], 
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
                id: 53, 
                is_used: false,
                width: 150, 
                height: 90, 
                offset: [68, 45], 
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
                id: 54,  
                is_used: false,
                width: 100, 
                height: 90, 
                offset: [45, 45], 
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
                id: 55, 
                is_used: false,
                width: 30, 
                height: 90, 
                offset: [20, 45], 
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
                id: 56, 
                is_used: false,
                width: 120, 
                height: 80, 
                offset: [55, 40], 
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
                id: 57, 
                is_used: false,
                width: 130, 
                height: 80, 
                offset: [60, 40], 
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
                id: 58,
                is_used: false,  
                width: 150, 
                height: 80,
                offset: [68, 40],  
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
                id: 59, 
                is_used: false,
                width: 100, 
                height: 80, 
                offset: [45, 40], 
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
                id: 60,  
                is_used: false,
                width: 50, 
                height: 80, 
                offset: [20, 40], 
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
                id: 61, 
                is_used: false,
                width: 120, 
                height: 90, 
                offset: [55, 45], 
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
                id: 62, 
                is_used: false,
                width: 130, 
                height: 90, 
                offset: [60, 45], 
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
                id: 63, 
                is_used: false,
                width: 150, 
                height: 90, 
                offset: [68, 45], 
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
                id: 64, 
                is_used: false,
                width: 100, 
                height: 90, 
                offset: [45, 45], 
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
                id: 65,  
                is_used: false,
                width: 50, 
                height: 90,
                offset: [20, 45],  
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
                id: 66, 
                is_used: false,
                width: 120, 
                height: 80, 
                offset: [55, 40], 
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
                id: 67 ,
                is_used: false,
                width: 130, 
                height: 80, 
                offset: [60, 40], 
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
                id: 68, 
                is_used: false,
                width: 150, 
                height: 80, 
                offset: [68, 40], 
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
                id: 69, 
                is_used: false,
                width: 100, 
                height: 80, 
                offset: [45, 40], 
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
                id: 70, 
                is_used: false, 
                width: 50, 
                height: 80, 
                offset: [20, 40], 
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
                id: 99, 
                is_used: false,
                offset: [46, 132], 
                width: 227, 
                height: 299, 
                stroke: 'black',
                strokeWidth: 1,
                rotationDeg: r
            });
            return poly;

    }
}