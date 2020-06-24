// var player1 = { name: 'You', color: 'yellow' };
// var player2 = { name: 'AI (Easy)', color: 'red' };
// var status = 'ready'; // 'ready', 'p1Turn', 'p2Turn', 'p1Win', 'p2Win'
var boardHTML = null
var winnerMsj = ''
var columnsHTML = null
var turn = 'yellow'
var board = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
]

var win = function () {
    //win horizontal
    for (var i = 0; i < board.length; i++) {
        for (var j = board[i].length - 1; j >= 0; j--) {
            if (board[i][j] != null) {
                if (board[i][j] === (board[i + 1][j]) && board[i][j] === (board[i + 2][j]) && board[i][j] === (board[i + 3][j])) {
                    winnerMsj.innerHTML = "El ganador es: " + board[i][j]
                    setTimeout(restart, 2000)

                }
            }
        }
    }
    //win vertical
    for (var i = 0; i < board.length; i++) {
        for (var j = board[i].length - 1; j >= 0; j--) {
            if (board[i][j] != null) {
                if (board[i][j] === (board[i][j + 1]) && board[i][j] === (board[i][j + 2]) && board[i][j] === (board[i][j + 3])) {
                    winnerMsj.innerHTML = "El ganador es: " + board[i][j]
                    setTimeout(restart, 2000)
                    //restart()
                    //console.log(board[i][j + 3])
                }
            }
        }
    }
    //win diagonal
    for (var i = 0; i < board.length; i++) {
        for (var j = board[i].length - 1; j >= 0; j--) {
            if (board[i][j] != null) {
                if (board[i][j] === (board[i + 1][j + 1]) && board[i][j] === (board[i + 2][j + 2]) && board[i][j] === (board[i + 3][j + 3])) {
                    winnerMsj.innerHTML = "El ganador es: " + board[i][j]
                    setTimeout(restart, 2000)
                }
            }
        }
    }
}

// var startChangeColor = function () {
//     if (start) {
//         boardHTML.style.backgroundColor = 'grey';
//     }
// }

var toggleTurn = function () {
    turn = (turn === 'yellow') ? 'red' : 'yellow'
}

var columnEventHandler = function (evt) {
    var columnId = evt.target.id.substr(1, 1)
    for (var i = 0; i < board[columnId].length; i++) {
        if (!board[columnId][i]) {
            board[columnId][i] = turn
            toggleTurn()
            render()
            break
        }
    }
}

var bindColumnHandlers = function () {
    columnsHTML = document.getElementsByClassName('column')
    for (var i = 0; i < columnsHTML.length; i++) {
        columnsHTML[i].onclick = columnEventHandler
    }
}

var restart = function () {
    board = [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ]
    winnerMsj.innerHTML = ''
    render()
}

var render = function () {
    var html = ''
    for (var i = 0; i < board.length; i++) {
        html += '<div id="c' + i + '" class="column">'
        for (var j = board[i].length - 1; j >= 0; j--) {
            html += '<div id="s' + i + j + '" class="spot'
            if (board[i][j]) html += ' ' + board[i][j]
            html += '"></div>'
        }
        html += '</div>'
    }
    boardHTML.innerHTML = html
    bindColumnHandlers()
    win()
}

function welcome() {
    var mensaje;
    var name = prompt("Introduzca su nombre:");

    if (name == null || name == "") {
        var name = prompt("Introduzca su nombre:");
    } else {
        mensaje = name;
    }
    you.innerHTML = mensaje;
    //console.log(you)
}



var init = function () {
    boardHTML = document.getElementById('board')
    column = document.getElementsByClassName('column')
    you = document.getElementById('you')
    winnerMsj = document.getElementById('winner')
    turn = Math.random() > 0.5 ? 'yellow' : 'red'
    //start = true;
    render()
    //startChangeColor()
}

window.onload = init