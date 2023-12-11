//make sure to npm install robotsjs before running this script

const robot = require('robotjs');


//sets max and min mouse positions 
const max_x_coordinate = 1920
const max_y_coordinate = 1080

function retrieve_mouse_x(){
    let mouse_x_position = Math.floor(Math.random() * max_x_coordinate)
    return mouse_x_position
}

function retrieve_mouse_y(){
    let mouse_y_position = Math.floor(Math.random() * max_y_coordinate)
    return mouse_y_position
}

// set mouse movement duration 1000 = 1 second

const max_speed = 30000 //3 seconds


function retrieve_duration(){
    let duration_time = Math.ceil(Math.random() * max_speed)
}


//robot.moveMouse(0,0)

for(let i =0; i < 10000; i++) {
    robot.moveMouseSmooth(retrieve_mouse_x(),retrieve_mouse_y(), retrieve_duration())
}
/*
mouse movement test
robot.moveMouse(500,500)
*/



