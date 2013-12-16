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
                id: 1,  
                name: "shape" , 
                offset: [40, 40], 
                is_used: false, 
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
                cornerRadius: 10, 
                id: 2,  
                name: "shape" , 
                offset: [50, 50], 
                is_used: false, 
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
                cornerRadius: 10, 
                id: 3,  
                name: "shape" , 
                offset: [60, 60], 
                is_used: false, 
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
                cornerRadius: 10, 
                id: 4,  
                name: "shape" , 
                offset: [45, 30], 
                is_used: false, 
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
                cornerRadius: 10, 
                id: 5,  
                name: "shape" , 
                offset: [60, 30], 
                is_used: false, 
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
                cornerRadius: 10, 
                id: 6,  
                name: "shape" , 
                offset: [75, 30], 
                is_used: false, 
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
                cornerRadius: 10, 
                id: 7,  
                name: "shape" , 
                offset: [60, 40], 
                is_used: false, 
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
                cornerRadius: 10, 
                name: "shape" , 
                offset: [45, 50], 
                is_used: false, 
                id: 8,
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
                cornerRadius: 10, 
                name: "shape" , 
                offset: [60, 50], 
                is_used: false, 
                id: 9,
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
                cornerRadius: 10, 
                name: "shape" ,
                offset: [75, 50],  
                is_used: false, 
                id: 10, 
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
                stroke: 'black',
                strokeWidth: 1, 
                name: "shape" , 
                is_used: false, 
                id: 11
            });
            return circle;
        case 12:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 20,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                is_used: false, 
                id: 12, 
                strokeWidth: 1
            });
            return circle;
        case 13:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 25,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                is_used: false, 
                id: 13, 
                strokeWidth: 1
            });
            return circle;
        case 14:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 30,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                is_used: false, 
                id: 14, 
                strokeWidth: 1
            });
            return circle;
        case 15:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 40,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                is_used: false, 
                id: 15, 
                strokeWidth: 1
            });
            return circle;
        case 16:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 50,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                is_used: false, 
                id: 16, 
                strokeWidth: 1
            });
            return circle;
        case 17:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 60,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                is_used: false, 
                id: 17, 
                strokeWidth: 1
            });
            return circle;
        case 18:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 75,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                is_used: false, 
                id: 18, 
                strokeWidth: 1
            });
            return circle;
        case 19:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 90,
                fill: 'red',
                stroke: 'black',
                id: 19, 
                strokeWidth: 1
            });
            return circle;
        case 20:  //circle
            var circle = new Kinetic.Circle({
                x: border_left+x,
                y: border_top+y,
                radius: 100,
                fill: 'red',
                stroke: 'black',
                name: "shape" , 
                is_used: false, 
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
                offset: [75, 15/12], 
                is_used: false, 
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
                offset: [75, 25],  
                is_used: false, 
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
                offset: [75, 75/2], 
                is_used: false, 
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
                offset: [75, 50],  
                is_used: false, 
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
                offset: [75, 125/2], 
                is_used: false, 
                id: 25, 
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
                name: "shape" , 
                offset: [45, 30/4], 
                is_used: false, 
                id: 26, 
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
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" ,
                offset: [45, 15],  
                is_used: false, 
                id: 27, 
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
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                offset: [45, 45/2], 
                is_used: false, 
                id: 28, 
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
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                offset: [45, 30], 
                is_used: false, 
                id: 29, 
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
                stroke: 'black',
                strokeWidth: 1,
                name: "shape" , 
                offset: [45, 225/6], 
                is_used: false, 
                id: 30, 
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
                stroke: 'black',
                strokeWidth: 1,
                width: 90, 
                height: 90, 
                name: "shape" , 
                offset: [45, 45], 
                is_used: false, 
                id: 31, 
                rotationDeg: r
            });
            return tri;
        case 32:  //triangle2
            var tri = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 120, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 120, 
                height: 90, 
                name: "shape" , 
                offset: [60, 45], 
                is_used: false, 
                id: 32, 
                rotationDeg: r
            });
            return tri;
        case 33:  //triangle3
            var tri = new Kinetic.Polygon({
                points: [0, 0, 0, 120, 90, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 90, 
                height: 120, 
                name: "shape" , 
                offset: [45, 60], 
                is_used: false, 
                id: 33, 
                rotationDeg: r
            });
            return tri;
        case 34:  //triangle4
            var tri = new Kinetic.Polygon({
                points: [0, 0, 0, 100, 110, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 110, 
                height: 100, 
                name: "shape" , 
                offset: [55, 50], 
                is_used: false, 
                id: 34, 
                rotationDeg: r
            });
            return tri;
        case 35:  //triangle5
            var tri = new Kinetic.Polygon({
                points: [0, 0, 0, 150, 120, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 120, 
                height: 150, 
                name: "shape" , 
                offset: [60, 75], 
                is_used: false, 
                id: 35, 
                rotationDeg: r
            });
            return tri;
        case 36:  //triangle6
            var tri = new Kinetic.Polygon({
                points: [0, 0, -20, 80, 80, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 100, 
                height: 80, 
                name: "shape" , 
                offset: [30, 40], 
                is_used: false, 
                id: 36, 
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
                width: 100, 
                height: 100, 
                name: "shape" , 
                offset: [30, 50], 
                is_used: false, 
                id: 37, 
                rotationDeg: r
            });
            return tri;
        case 38:  //triangle8
            var tri = new Kinetic.Polygon({
                points: [0, 0, -20, 100, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 120, 
                height: 100, 
                name: "shape" , 
                offset: [40, 50], 
                is_used: false, 
                id: 38, 
                rotationDeg: r
            });
            return tri;
        case 39:  //triangle9
            var tri = new Kinetic.Polygon({
                points: [0, 0, -20, 80, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 120, 
                height: 80, 
                name: "shape" ,
                offset: [40, 40],  
                is_used: false, 
                id: 39, 
                rotationDeg: r
            });
            return tri;
        case 40:  //triangle10
            var tri = new Kinetic.Polygon({
                points: [0, 0, -20, 60, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 120, 
                height: 60, 
                name: "shape" , 
                offset: [40, 30], 
                is_used: false, 
                id: 40, 
                rotationDeg: r
            });
            return tri;
        case 41:  //triangle11
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 80, 80, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 80, 
                height: 80, 
                name: "shape" , 
                offset: [50, 40], 
                is_used: false, 
                id: 41, 
                rotationDeg: r
            });
            return tri;
        case 42:  //triangle12
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 100, 80, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 80, 
                height: 100, 
                name: "shape" ,
                offset: [50, 50],  
                is_used: false, 
                id: 42, 
                rotationDeg: r
            });
            return tri;
        case 43:  //triangle13
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 100, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 100, 
                height: 100, 
                name: "shape" , 
                offset: [60, 50], 
                is_used: false, 
                id: 43, 
                rotationDeg: r
            });
            return tri;
        case 44:  //triangle14
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 80, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 100, 
                height: 80, 
                name: "shape" , 
                offset: [60, 40], 
                is_used: false, 
                id: 44, 
                rotationDeg: r
            });
            return tri;
        case 45:  //triangle15
            var tri = new Kinetic.Polygon({
                points: [0, 0, 20, 100, 100, 20],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 100, 
                height: 100, 
                name: "shape" , 
                offset: [50, 50], 
                is_used: false, 
                id: 45, 
                rotationDeg: r
            });
            return tri;
        case 46:  //triangle16
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 100, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 100, 
                height: 100, 
                name: "shape" , 
                offset: [50, 50], 
                is_used: false, 
                id: 46, 
                rotationDeg: r
            });
            return tri;
        case 47:  //triangle17
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 120, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 100, 
                height: 120, 
                name: "shape" , 
                offset: [50, 60], 
                is_used: false, 
                id: 47, 
                rotationDeg: r
            });
            return tri;
        case 48:  //triangle18
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 100, 120, 20],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 120, 
                height: 100, 
                name: "shape" , 
                offset: [60, 50], 
                is_used: false, 
                id: 48, 
                rotationDeg: r
            });
            return tri;
        case 49:  //triangle19
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 100, 100, 50],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 100, 
                height: 100, 
                name: "shape" , 
                offset: [50, 50], 
                is_used: false, 
                id: 49, 
                rotationDeg: r
            });
            return tri;
        case 50:  //triangle20
            var tri = new Kinetic.Polygon({
                points: [0, 0, 50, 100, 100, -20],
                x: border_left+x,
                y: border_top+y,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 1,
                width: 100, 
                height: 120, 
                name: "shape" , 
                offset: [50, 40], 
                is_used: false, 
                id: 50, 
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
                stroke: 'black',
                strokeWidth: 1,
                width: 120, 
                height: 90, 
                name: "shape" , 
                offset: [60, 45], 
                is_used: false, 
                id: 51, 
                rotationDeg: r
            });
            return trape;
        case 52:  //trapezoid2
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 130, 90, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 130, 
                height: 90, 
                name: "shape" , 
                offset: [65, 45], 
                is_used: false, 
                id: 52, 
                rotationDeg: r
            });
            return trape;
        case 53:  //trapezoid3
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 150, 90, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 150, 
                height: 90, 
                name: "shape" , 
                offset: [75, 45], 
                is_used: false, 
                id: 53, 
                rotationDeg: r
            });
            return trape;
        case 54:  //trapezoid4
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 100, 90, 80, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 100, 
                height: 90, 
                name: "shape" , 
                offset: [50, 45], 
                is_used: false, 
                id: 54, 
                rotationDeg: r
            });
            return trape;
        case 55:  //trapezoid5
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 50, 90, 30, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 50, 
                height: 90, 
                name: "shape" ,
                offset: [25, 45],  
                is_used: false, 
                id: 55, 
                rotationDeg: r
            });
            return trape;
        case 56:  //trapezoid6
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 120, 80, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 120, 
                height: 80, 
                name: "shape" , 
                offset: [60, 40], 
                is_used: false, 
                id: 56, 
                rotationDeg: r
            });
            return trape;
        case 57:  //trapezoid7
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 130, 80, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 130, 
                height: 80, 
                name: "shape" , 
                offset: [65, 40], 
                is_used: false, 
                id: 57, 
                rotationDeg: r
            });
            return trape;
        case 58:  //trapezoid8
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 150, 80, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 150, 
                height: 80, 
                name: "shape" , 
                offset: [75, 40], 
                is_used: false, 
                id: 58, 
                rotationDeg: r
            });
            return trape;
        case 59:  //trapezoid9
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 100, 80, 80, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 100, 
                height: 80, 
                name: "shape" , 
                offset: [50, 40], 
                is_used: false, 
                id: 59, 
                rotationDeg: r
            });
            return trape;
        case 60:  //trapezoid10
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 50, 80, 30, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 50, 
                height: 80, 
                name: "shape" ,
                offset: [25, 40],  
                is_used: false, 
                id: 60, 
                rotationDeg: r
            });
            return trape;
        case 61:  //trapezoid11
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 100, 90, 120, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 120, 
                height: 90, 
                name: "shape" , 
                offset: [60, 45], 
                is_used: false, 
                id: 61, 
                rotationDeg: r
            });
            return trape;
        case 62:  //trapezoid12
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 100, 90, 130, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 130, 
                height: 90, 
                name: "shape" , 
                offset: [65, 45], 
                is_used: false, 
                id: 62, 
                rotationDeg: r
            });
            return trape;
        case 63:  //trapezoid13
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 100, 90, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 150, 
                height: 90, 
                name: "shape" , 
                offset: [75, 45], 
                is_used: false, 
                id: 63, 
                rotationDeg: r
            });
            return trape;
        case 64:  //trapezoid14
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 80, 90, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 100, 
                height: 90, 
                name: "shape" , 
                offset: [50, 45], 
                is_used: false, 
                id: 64, 
                rotationDeg: r
            });
            return trape;
        case 65:  //trapezoid15
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 90, 30, 90, 50, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 50, 
                height: 90, 
                name: "shape" , 
                offset: [25, 45], 
                is_used: false, 
                id: 65, 
                rotationDeg: r
            });
            return trape;
        case 66:  //trapezoid16
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 100, 80, 120, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 120, 
                height: 80, 
                name: "shape" , 
                offset: [60, 40], 
                is_used: false, 
                id: 66, 
                rotationDeg: r
            });
            return trape;
        case 67:  //trapezoid17
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 100, 80, 130, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 130, 
                height: 80, 
                name: "shape" , 
                offset: [65, 40], 
                is_used: false, 
                id: 67, 
                rotationDeg: r
            });
            return trape;
        case 68:  //trapezoid18
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 100, 80, 150, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 150, 
                height: 80, 
                name: "shape" , 
                offset: [75, 40], 
                is_used: false, 
                id: 68, 
                rotationDeg: r
            });
            return trape;
        case 69:  //trapezoid19
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 80, 80, 100, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 100, 
                height: 80, 
                name: "shape" , 
                offset: [50, 40], 
                is_used: false, 
                id: 69, 
                rotationDeg: r
            });
            return trape;
        case 70:  //trapezoid20
            var trape = new Kinetic.Polygon({
                points: [0, 0, 0, 80, 30, 80, 50, 0],
                x: border_left+x,
                y: border_top+y,
                fill: 'orange',
                stroke: 'black',
                strokeWidth: 1,
                width: 50, 
                height: 80, 
                name: "shape" , 
                offset: [25, 40], 
                is_used: false, 
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
                width: 227, 
                height: 299, 
                name: "shape" , 
                offset: [93/2, 265/2], 
                is_used: false, 
                id: 99, 
                rotationDeg: r
            });
            return poly;

    }
}