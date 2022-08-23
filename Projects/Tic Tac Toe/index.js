var playerText = document.getElementById('playerText');
var restartBtn = document.getElementById('restartBtn');
var game_winner_line = document.getElementById("gameboard");
var boxes = Array.from(document.getElementsByClassName('box'));
var winner_line = document.getElementsByClassName("strikethrough-100p");

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks');


const O_TEXT ="O";
const X_TEXT ="X";
let currentPlayer = X_TEXT;
var spaces = Array(9).fill(null);

const startGame = () => {
        boxes.forEach(box => box.addEventListener('click', boxClicked));

}

function boxClicked(e) {
    const id = e.target.id;

    if (!spaces[id] && playerHasWon() == false ){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if (playerHasWon() !== false ) {
            playerText = `${currentPlayer} has won!`;
            let winning_blocks = playerHasWon()[0];
            let int = playerHasWon()[1];
            console.log (winning_line[int]);
            set_css(int);

            winning_blocks.map(box => boxes[box].style.backgroundColor = winnerIndicator)
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT: X_TEXT;
    }
}

const winningCombos = [
    [0,1,2], //0
    [3,4,5], //1
    [6,7,8], //2
    [0,3,6], //3
    [1,4,7], //4
    [2,5,8], //5
    [0,4,8], //6
    [2,4,6]  //7
]

const winning_line = {
    0 : ['15%', 'rotate(-0deg)', '0%'],
    1 : ['50%', 'rotate(-0deg)', '0%'],
    2 : ['82%', 'rotate(-0)', '0%'],
    3 : ['50%', 'rotate(-90deg)', '33%'],
    4 : ['50%', 'rotate(-90deg)', '0%'],
    5 : ['50%', 'rotate(-90deg)', '-33%'],
    6 : ['50%', 'rotate(45deg)', '0%'],
    7 : ['50%', 'rotate(-45deg)', '0%']
  };

function set_css(int){
    let new_line_positon = winning_line[int][0];
    let new_line_rotation = winning_line[int][1];
    let new_line_horizontal = winning_line[int][2];
    game_winner_line.classList.add('strikethrough-100p');
    document.documentElement.style.setProperty('--line_poistion', new_line_positon);
    document.documentElement.style.setProperty('--line_rotation', new_line_rotation);
    document.documentElement.style.setProperty('--line_horizontal', new_line_horizontal);

}

function playerHasWon() {
    var int = 0;
    for (const condition of winningCombos) {
        let [a, b, c] = condition; 
        if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [[a, b, c] , int];
        }
    int += 1
    }
    return false;
}


restartBtn.addEventListener('click', restart);
function restart() {
    spaces.fill(null);
    boxes.forEach ( box => {
        box.innerHTML = '';
        box.style.backgroundColor = ''
    })

    playerText = 'Tic Tac Toe';
    game_winner_line.classList.remove('strikethrough-100p')
    currentPlayer = X_TEXT;

}

startGame();



