let gameIsActive = 0
let playerWon = false
let currentPlayer = 'o'
let playerWhoWon = ''
const gameBoard = {
    board: [
        '','','',
        '','','',
        '','',''
    ]
}
function startGame()
{
    gameIsActive = true
    playerWon = false
    while(playerWon === false)
        {
            let slot = prompt(`What slot does ${currentPlayer.toUpperCase()} want to take from 1-9`)
            slot--
            if (slot >= 0 && slot <= 8)
                {
                    board = gameBoard.board
                    clearBoard(board)
                    fillSlot(slot)
                    checkForWin(board)

                }
            else{
                console.log(`Slot isn't in the the right interval! Slot = ${slot}`)
                return
            }
        }
}
function clearBoard(board)
{
    board = [
        '','','',
        '','','',
        '','',''
    ]
}
function endGame(currentPlayer)
{
    if(currentPlayer !== null)
        {
            console.log(`The Player ${currentPlayer} has Won!`)
            playerWon = true
            gameIsActive = false
        }
}
function playerSwitch()
{
    if(currentPlayer === 'o')
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
    board = gameBoard.board
    if(board[slot] === undefined)
    {
        board[slot] = `${currentPlayer}`
        playerSwitch()
    }
    else
    {
        console.log('Ei ei ei, cannot pass the same slot twice ma boy!!!')
    }
    console.log(gameBoard)

    }
function checkForWin(board)
{
    const winCases = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left to bottom-right
        [2, 4, 6]  // Diagonal from top-right to bottom-left
    ];
    for(let i = 0; i < winCases.length; i++)
        {
            const [a, b, c] = winCases[i]
            if(board[a] && typeof board[a] === 'string' && board[a] === board[b] && board[a] === board[c])
                {
                   playerWhoWon = board[a].toUpperCase()
                   endGame(playerWhoWon)
                }
        }
    
}