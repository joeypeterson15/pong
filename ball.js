const INITIAL_VELOCITY = 0.05
const VELOCITY_INCREASE = 0.00001

export default class Ball {

    constructor(ballElem) {
      this.ballElem = ballElem
      this.reset()
    }

    get x() {
      return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
    }

    set x(value) {
      this.ballElem.style.setProperty("--x", value)
    }

    get y() {
      return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
    }

    set y(value) {
      this.ballElem.style.setProperty("--y", value)
    }

    rect() {
      return this.ballElem.getBoundingClientRect()
    }

    reset () {
      this.x = 50
      this.y = 50
      this.direction = { x : 0, y: 0 }
      while (
        Math.abs(this.direction.x) <= 0.3 || Math.abs(this.direction.y )>= 0.7
      ) {
        const heading = getRandomNumberBetween(0, 2 * Math.PI)
        this.direction = { x : Math.cos(heading), y : Math.sin(heading) }
      }
      this.velocity = INITIAL_VELOCITY

    }

    //we call this method in the script frame
    update(delta, paddleRects) {
        this.x += this.direction.x * this.velocity * delta
        this.y += this.direction.y * this.velocity * delta
        this.velocity += VELOCITY_INCREASE * delta
        const rect = this.rect()

        if (rect.top <= 0 || rect.bottom >= window.innerHeight) {
          this.direction.y *= -1
        }

        //paddleRects is an array containing the computer and player paddle rect positions.
        //rect variable is the rect position of the ball
        if (paddleRects.some(r => isCollision(r, rect))) {
          this.direction.x *= -1
        }
        // console.log('rect', rect)
    }
}

function isCollision(paddle, ball) {
    return (paddle.left <= ball.right &&
        paddle.right >= ball.left &&
        paddle.top <= ball.bottom &&
        paddle.bottom >= ball.top)
}

function getRandomNumberBetween (min, max) {
  return Math.random() * (max - min) + min
}
