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
            const slot = prompt(`What slot does ${toUpperCase(currentPlayer)} want to take from 1-9`)
            slot--
            if (slot >= 0 && slot <= 8)
                {
                    fillSlot(slot)
                    checkForWin(board)
                    playerSwitch()
                }
            else{
                console.log(`Slot isn't in the the right interval! Slot = ${slot}`)
                return
            }
        }
    if(!gameIsActive) gameIsActive = 1 
}
endGame()
{

    if(gameIsActive) gameIsActive = 0

}
function playerSwitch()
{
    if(gameIsActive)
        {
            if(currentPlayer !== 'x')
                {
                    currentPlayer = 'o'
                }
                else
                {
                    currentPlayer = 'x'
                }
        }
}

function fillSlot(slot)
{
    gameBoard.board[slot] = `${currentPlayer}`
    console.log(gameBoard)
    checkBoard()
    }
function checkForWin(board)
{
    if (board.includes('x')) playerWon = true
}