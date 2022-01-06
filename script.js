import { Ball } from './ball.js'

const ball = new Ball(document.getElementById('ball'))

let lastTime

//create a loop. the time input is the time since script starts running
export function update (time) {
    //this just shows how time will print out the time its been since browser upload
    console.log(time)

    if (lastTime !== null) {
        //create a delta ==> the change in time between each function call. we can use this to increment the ball according to how the frames are being rendered.
        let delta = time - lastTime
        //pass delta into the ball update method.
        ball.update(delta)

    }


    lastTime = time

    window.requestAnimationFrame(update)
}

//as soon as something changes in the code and therefore on the screen call the update function
window.requestAnimationFrame(update)
