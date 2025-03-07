const gravity = 0.6

class Sprite {
    constructor({ position, velocity ,dimensions }) {
        this.position = position
        this.velocity = velocity
        this.width = dimensions.width
        this.height = dimensions.height
    }
    draw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){
        if (Math.ceil(this.position.y+this.height >= canvas.height)){
           this.onGround = true
        } else {
            this.onGround = false
        }

        if (this.position.y+this.height > canvas.height){
            this.position.y = canvas.height-this.height
            this.velocity.y = 0
        } else {
            this.velocity.y += gravity
        }

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.draw()
    }

    jump(){
        if (!this.onGround) return
        this.velocity.y = -16
    }
}

class Fighter extends Sprite {
    constructor({
        position,
        velocity,
        dimensions
    }) {
        super({
            position,
            velocity,
            dimensions
        })
        this.velocity = velocity
        this.width = dimensions.width
        this.height = dimensions.height

        this.lastKeyPressed

        this.onGround
    }
}

const player = new Fighter({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 2
    },
    dimensions: {
        width:50,
        height: 150
    }
})