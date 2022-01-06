export default class Ball {
    // when we instantiate a new ball, we can pass in the actual ball div element and set it as the ballElement property of the new ball
    //this is how we can mess with the ball element
    constructor(ballElement) {
        this.ballElement = ballElement
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--x"))
    }

    set x(value) {
        this.ballElement.setProperty("--x", value)
    }
    get y() {
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--y"))
    }

    set y(value) {
        this.ballElement.setProperty("--y", value)
    }

    //we call this method in the script frame
    update(delta) {
        this.x = 5
    }
}
