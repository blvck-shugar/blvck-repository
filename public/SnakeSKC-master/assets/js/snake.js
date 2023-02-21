/**
 * This is the snake object. It contains all important information for the snake.
 */
let snake = {
    // The snake's starting position (top left)
    x: 0,
    y: 0,
    
    // This determines the snake's direction. Moves one grid length every frame in either the x or y direction
    dx: CELL_SIZE,
    dy: 0,
    
    // This is a list to keep track of each of the snake's segments
    cells: [],
    
    // The snake's length. This increases each time an apple is eaten
    length: 4,

    // The snake's color
    color: 'green',
};

let altColor = ['blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green','blue','purple','orange','yellow','fuchsia','white','azure','aquamarine','darkorange','aqua','green',]

 //Gives the snake a random color whenever an apple is eaten
function randomSnakeColor(){
    for(let i=0; i<snake.length; i++){
        snake.color=altColor[i]
    }
    };


// function randomSnakeColor(){
//     for(i=0; i<snake.length; i++){
//         let maxVal = 0XFFFFFF; //16777215
//         let randomNumber = Math.random(i) * maxVal;
//         randomNumber =Math.floor(randomNumber);
//         randomNumber = randomNumber. toString(16);
//         snake.color=randomNumber.padStart(6, 0);
//         return snake.color.toUpperCase()
//     }
// };

 
    // function random(number){
    //     return math.floor (math.random()*number);;
    // }
    // function randomColor(){
    //     return 'rgb('+random(255)+','+random(255)+','+random(255)+')';
    // }


// Set the snake back to its defaul values
function resetSnake() {
    snake.x = 0;
    snake.y = 0;
    snake.cells = [];
    snake.length = 4;
    snake.dx = CELL_SIZE;
    snake.dy = 0;
}