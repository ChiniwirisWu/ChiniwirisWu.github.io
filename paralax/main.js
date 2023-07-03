const slider = document.getElementById('slider')
const showGameSpeed = document.getElementById('showGameSpeed')
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 800 
const CANVAS_HEIGHT = canvas.height = 700
let gameSpeed = 5
let gameFrame = 0
let x = 0
let x2 = 2400

showGameSpeed.innerHTML = gameSpeed
slider.onchange = e =>{
    gameSpeed = e.target.value
    showGameSpeed.innerHTML = gameSpeed
}

const backgroundLayer1 = new Image()
backgroundLayer1.src = './backgroundLayers/layer-1.png'
const backgroundLayer2 = new Image()
backgroundLayer2.src = './backgroundLayers/layer-2.png'
const backgroundLayer3 = new Image()
backgroundLayer3.src = './backgroundLayers/layer-3.png'
const backgroundLayer4 = new Image()
backgroundLayer4.src = './backgroundLayers/layer-4.png'
const backgroundLayer5 = new Image()
backgroundLayer5.src = './backgroundLayers/layer-5.png'

class Layer {
    constructor(image, speedModifier){
        this.x = 0
        this.y = 0
        this.width = 2400
        this.height = 700
        // this.x2 = this.width
        this.image = image
        this.speedModifier = speedModifier
        this.speed = gameSpeed * this.speedModifier
    }
    update(){
        this.speed = gameSpeed * this.speedModifier
        if(this.x <= -this.width){
            this.x = 0 
        }
        this.x = this.x - this.speed
        // if(this.x2 <= -this.width){
        //     this.x2 = this.width + this.x - this.speed
        // }
        // this.x = Math.floor(this.x - this.speed)
        // this.x2 = Math.floor(this.x2 - this.speed)
        // this.x = gameFrame * gameSpeed % this.width
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)

    }
}

const layer1 = new Layer(backgroundLayer1, 0.5)
const layer2 = new Layer(backgroundLayer2, 0.5)
const layer3 = new Layer(backgroundLayer3, 0.5)
const layer4 = new Layer(backgroundLayer4, 0.5)
const layer5 = new Layer(backgroundLayer5, 0.5)

const gameLayers = [layer1, layer2, layer3, layer4, layer5]

function animation(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    gameLayers.forEach((el)=>{
        el.update()
        el.draw()
    })
    // gameFrame--
    requestAnimationFrame(animation)
}


animation()