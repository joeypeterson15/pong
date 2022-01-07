import  Ball  from './Ball.js'
import Paddle from './Paddle.js'

const ball = new Ball(document.getElementById('ball'))
const computerPaddle = new Paddle(document.getElementById('computerPaddle'))
const playerPaddle = new Paddle(document.getElementById('playerPaddle'))
const computerScore = document.getElementById('computer-score')
const playerScore = document.getElementById('player-score')

let lastTime

//create a loop. the time input is the time since script starts running
export function update (time) {
    //this just shows how time will print out the time its been since browser upload
    // console.log(time)

    if (lastTime != null) {
        //create a delta ==> the change in time between each function call. we can use this to increment the ball according to how the frames are being rendered.
        let delta = time - lastTime
        //pass delta into the ball update method.
        ball.update(delta, [computerPaddle.rect(), playerPaddle.rect()])
        computerPaddle.update(delta, ball.y)
    }

    const rect = ball.rect()

    if  (rect.left <= 0 || rect.right >= window.innerWidth) {
        handleLose()
          ball.reset()
          computerPaddle.reset()
        }

    //getting the time
    lastTime = time

    window.requestAnimationFrame(update)
}

function handleLose () {
    const rect = ball.rect()
    if (rect.left <= 0) {
        playerScore.innerText = parseFloat((playerPaddle.innerText) + 1)
    } else {
        computerScore.innerText =parseFloat((computerScore.innerText) + 1)
    }
}

window.addEventListener('mousemove', e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
})

//as soon as something changes in the code and therefore on the screen call the update function
window.requestAnimationFrame(update)
