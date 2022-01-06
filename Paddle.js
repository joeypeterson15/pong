const SPEED = 0.02

export default class Paddle {
    constructor (paddleElement) {
        this.paddleElement = paddleElement
    }

    get position () {
        return parseFloat(getComputedStyle(this.paddleElement).getPropertyValue('--position'))
    }

    set position (value) {
        this.paddleElement.style.setProperty('--position', value)
    }

    rect () {
        return this.paddleElement.getBoundingClientRect()
    }

    reset () {
        this.position = 50
    }

    //the update method will only be called for the computer paddle. This is what will track the ball and try to hit it back like a computer. The speed is how fast the computer is.
    update (delta, ballHeight) {
        this.position += SPEED * delta * (ballHeight - this.position)
    }

}
