// var player1 = { name: 'You', color: 'yellow' };
// var player2 = { name: 'AI (Easy)', color: 'red' };
// var status = 'ready'; // 'ready', 'p1Turn', 'p2Turn', 'p1Win', 'p2Win'
var boardHTML = null
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
    for (var i = 0; i < board.length; i++) {
        for (var j = board[i].length - 1; j >= 0; j--) {
            if (board[i][j] != null) {
                if (board[i][j] === (board[i + 1][j]) && board[i][j] === (board[i + 2][j]) && board[i][j] === (board[i + 3][j])) {
                    alert('Gano el color: ' + board[i][j])
                    //setTimeout(alert(winMessage + board[i][j]), 1500)
                    //restart()
                }
            }
        }
    }
    for (var i = 0; i < board.length; i++) {
        for (var j = board[i].length - 1; j >= 0; j--) {
            if (board[i][j] != null) {
                if (board[i][j] === (board[i][j + 1]) && board[i][j] === (board[i][j + 2]) && board[i][j] === (board[i][j + 3])) {
                    alert('Gano el color: ' + board[i][j])
                    //setTimeout(alert(winMessage), 1500)
                    //restart()
                    console.log(board[i][j + 3])
                }
            }
        }
    }
    for (var i = 0; i < board.length; i++) {
        for (var j = board[i].length - 1; j >= 0; j--) {
            if (board[i][j] != null) {
                if (board[i][j] === (board[i + 1][j + 1]) && board[i][j] === (board[i + 2][j + 2]) && board[i][j] === (board[i + 3][j + 3])) {
                    alert('Gano el color: ' + board[i][j])
                    //setTimeout(alert(winMessage + board[i][j]), 1500)
                }
            }
        }
    }
}

var startChangeColor = function () {
    if (start) {
        boardHTML.style.backgroundColor = 'grey';
    }
}

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

var init = function () {
    boardHTML = document.getElementById('board')
    column = document.getElementsByClassName('column')
    turn = Math.random() > 0.5 ? 'yellow' : 'red'
    start = true;
    render()
    startChangeColor()
}

window.onload = init