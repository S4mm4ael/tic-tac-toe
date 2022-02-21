console.log("Ваша отметка - 60 балла(ов)");

const statusDisplay = document.querySelector('.game-status');

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;

let turnNumberArr = [0];
const turnNumberBlock = document.querySelector('.turn-number');

var gameWinners = document.querySelector('.winners');

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    handleTurnNumber()
}
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}
function handleTurnNumber() {
  turnNumberArr.push(1);
}
function totalTurns(){
  turnNumberBlock.innerHTML = `Total turns number: ${turnNumberArr.map(i=>x+=i, x=0).reverse()[0]}`
}
function addWinner(winner){
  let block = document.createElement("div");
  gameWinners.append(block);
  block.classList.add(".winners-list-element");
  block.innerHTML = winner;
  localStorage.setItem("gameWinners", gameWinners.innerHTML);
  return block
}
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        totalTurns()
        addWinner(currentPlayer)
        return;
    }
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        totalTurns()
        addWinner('Draw')
        return;
    }
    handlePlayerChange();
}
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}
// Replay button
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    turnNumberArr = [0]
    statusDisplay.innerHTML = '';
    turnNumberBlock.innerHTML = '';
    clearWinners ()
}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game-restart').addEventListener('click', handleRestartGame);
// Clear top-10
function clearWinners (){
  if(gameWinners.children.length > 10){
  gameWinners.innerHTML = "";
  localStorage.clear();
  }
}
// Local storage 
function getLocalStorage (){
  gameWinners.innerHTML = (localStorage.getItem("gameWinners"));
  clearWinners ()
}
window.addEventListener('load', getLocalStorage);
