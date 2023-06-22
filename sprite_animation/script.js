const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const dropDown = document.getElementById('pose-dropdown') 
const back = document.getElementById('back')

back.onclick = ()=>{
    window.open('../index.html')
}
let playerState = 'idle'
dropDown.addEventListener('change', (e)=>{
    playerState = e.target.value
})

const CANVAS_WIDHT = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600
const spriteWidth = 575
const spriteHeight = 523
const playerImage = new Image()
playerImage.src = './shadow_dog.png'
const staggerFrames = 4
let gameFrame = 0
const spriteAnimations = []
const animationStates = [
    {
        name : 'idle',
        frames: 7
    },
    {
        name : 'jump',
        frames: 7
    },
    {
        name : 'fall',
        frames: 7
    },
    {
        name : 'walk',
        frames: 9
    },
    {
        name : 'confuse',
        frames: 11
    },
    {
        name : 'sit',
        frames: 5
    },
    {
        name : 'roll',
        frames: 7
    },
    {
        name : 'bite',
        frames: 7
    },
    {
        name : 'lay',
        frames: 12
    },
    {
        name : 'hit',
        frames: 4
    },
]

animationStates.forEach((state,index)=>{
    let frames = {
        loc: []
    }
    for(let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth
        let positionY = index * spriteHeight
        frames.loc.push({x:positionX, y:positionY})
    }
    spriteAnimations[state.name] = frames
})


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDHT, CANVAS_HEIGHT)
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length
    let frameX = spriteWidth * position
    let frameY = spriteAnimations[playerState].loc[position].y
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)

    gameFrame++
    requestAnimationFrame(animate)
}

animate()