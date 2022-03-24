class Cannon {
    constructor(x, y, width, height, angle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.cannonImage = loadImage("assets/canon.png")
        this.cannonBase = loadImage("assets/cannonBase.png")
    }


    display() {

        if (keyIsDown(RIGHT_ARROW) && this.angle < 40) {
            this.angle += 1
        }

        if (keyIsDown(LEFT_ARROW) && this.angle > -20) {
            this.angle -= 1
        }

        push()
        translate(this.x, this.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.cannonImage, 0, 0, this.width, this.height)
        pop()
        image(this.cannonBase, 80 - 10, -10 + 35, 200, 200)
    }
}