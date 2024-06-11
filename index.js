let gameIsActive = 0
let playerWon = false
let currentPlayer = 'o'
const gameBoard = {
    board: [
        0, 0, 0, 
        0, 0, 0,
        0, 0, 0
        ]
}
function startGame()
{
    while(playerWon === false)
        {
            let slot = prompt(`What slot does ${currentPlayer.toUpperCase()} want to take from 1-9`)
            slot--
            if (slot >= 0 && slot <= 8)
                {
                    board = gameBoard.board
                    fillSlot(slot)
                    playerSwitch()
                    checkForWin(board)

                }
            else{
                console.log(`Slot isn't in the the right interval! Slot = ${slot}`)
                return
            }
        }
    if(!gameIsActive) gameIsActive = 1 
}
// endGame()
// {

//     if(gameIsActive) gameIsActive = 0

// }
function playerSwitch()
{
    if(currentPlayer === '0')
    {
            currentPlayer = 'x'
    }
    else
    {
        currentPlayer = 'o'
    }
}

function fillSlot(slot)
{
    gameBoard.board[slot] = `${currentPlayer}`
    console.log(gameBoard)
    }
function checkForWin(board)
{
    if (board.includes('x')) playerWon = true
}