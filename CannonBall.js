class CannonBall {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.r = 30
        this.body = Bodies.circle(x, y, this.r, options);
        this.Image = loadImage("assets/cannonball.png")
        this.tragectory = []
        World.add(world, this.body)

    }

    Shoot() {
        var NA = cannon.angle - 28
        NA = NA * (3.14 / 180)
        var Velocity = p5.Vector.fromAngle(NA)
        Velocity.mult(0.5)
        Matter.Body.setStatic(this.body, false)
        Matter.Body.setVelocity(this.body, { x: Velocity.x * (180 / 3.14), y: Velocity.y * (180 / 3.14) })
    }








    display() {
        push()
        imageMode(CENTER)
        image(this.Image, this.body.position.x, this.body.position.y, this.r, this.r)
        pop()

        if (this.body.velocity.x > 0 && this.body.position.x > 10) {
            var position = [this.body.position.x, this.body.position.y]
            this.tragectory.push(position)
        }
        for (var I = 0; I < this.tragectory.length; I = I + 1) {
            image(this.Image, this.tragectory[I][0], this.tragectory[I][1], 7.5, 7.5)
        }
    }

}