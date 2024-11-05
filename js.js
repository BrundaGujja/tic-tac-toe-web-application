let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

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

function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        document.querySelectorAll(".cell")[index].innerText = currentPlayer;
        checkResult();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        document.getElementById("status").innerText = Player ${currentPlayer}'s turn ;
    }
}

function checkResult() {
    let roundWon = false;
    for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        document.getElementById("status").innerText = Player ${currentPlayer} wins!;
        gameActive = false;
    } else if (!board.includes("")) {
        document.getElementById("status").innerText = "It's a tie!";
        gameActive = false;
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
    document.getElementById("status").innerText = "Player X's turn";
}