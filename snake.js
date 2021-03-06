import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 2
const snakeBody = [
    {x:11, y:11},
    {x:12,y:11},
    {x:13,y:11}
]

export function updateSnake (){
    console.log('update snake')
    const inputDirection = getInputDirection()
    for( let i = snakeBody.length -2; i>=0; i--){
        snakeBody[i+1] = { ...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function drawSnake (gameBoard){
    snakeBody.forEach(segment=>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}