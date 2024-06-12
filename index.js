let counter = 0
let gameIsActive = 0
let playerWon = false
let currentPlayer = 'o'
let playerWhoWon = ''
const slots = document.querySelectorAll('[data-index]')
const clearButton = document.querySelector('.button.restart')
const startButton = document.querySelector('.button.start')
const gameBoard = {
    board: [
        '','','',
        '','','',
        '','',''
    ]
}
function startGame() {
    document.querySelector('h3').innerText = ''
    clearBoard()
    gameIsActive = true;
    playerWon = false;
    slots.forEach((slot) => {
        slot.addEventListener('click', () => {
            let slotIndex = slotPressed(slot);
            fillSlot(slotIndex);
            updateBoard();
            checkForWin(gameBoard.board);
        });
    });
}
function slotPressed(slot)
{
    return slot.dataset.index
}
function clearBoard()
{
    playerWhoWon = ''
    counter = 0
    gameBoard.board = [
        '','','',
        '','','',
        '','',''
    ]
    updateBoard()
    document.querySelector('h3').innerText = ''
    slots.forEach((slot) => {
                slot.style = "color: #EEEEEE;"
    })

}
function endGame(currentPlayer)
{
    if(counter === 9)
        {
            if(currentPlayer !== null || currentPlayer !== undefined){
            document.querySelector('h3').innerText = `This Is a Draw!`
            }
        }
        else{
            if(currentPlayer !== null || currentPlayer !== undefined)
            {
                console.log(`The Player ${currentPlayer} has Won!`)
                playerWon = true
                gameIsActive = false
                document.querySelector('h3').innerText = `The Player ${playerWhoWon} Won This Match!`
            }
        }
    
}
function accentWin(a, b, c)
{
    slots.forEach((slot) => {
        if(a == slot.dataset.index || b == slot.dataset.index || c == slot.dataset.index)
            {
                slot.style = "color: green;"
            }

    })
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
function updateBoard()
{
    slots.forEach((slot) => {
        const index = slot.dataset.index
        return slot.innerText = gameBoard.board[index].toUpperCase()

    })
}
function fillSlot(slot) {
    if(gameIsActive && gameBoard.board[slot] === '') {
        gameBoard.board[slot] = `${currentPlayer}`;
        counter++
        playerSwitch();
        console.log(gameBoard);
        checkForWin(gameBoard.board);
    } else {
        console.log('Ei ei ei, cannot pass the same slot twice!');
    }
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
                   accentWin(a, b ,c)
                   endGame(playerWhoWon)
                }
        }
    if(counter === 9)
        {
            endGame()
        }
}
clearButton.addEventListener('click', () => clearBoard())
startButton.addEventListener('click', startGame)