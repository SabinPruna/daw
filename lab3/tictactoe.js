var WIN_SIZE = 3,
    EMPTY = '&nbsp;',
    boxes = [],
    turn = 'X',
    score,
    moves;

//functie pentru initializarea scriptului.
function init() {
    var board = document.createElement('table');
    board.setAttribute('border', 1);
    board.setAttribute('cellspacing', 0);

    var identifier = 1;
    //creare tabel din javascript pentru 3x3 pentru joc
    for (var i = 0; i < WIN_SIZE; i++) {
        var row = document.createElement('tr');
        board.appendChild(row);
        for (var j = 0; j < WIN_SIZE; j++) {
            var cell = document.createElement('td');

            //elementele sunt atribuite cu clase pentru linii, coloane si diagonale pentru a verifica daca un jucator a castigat.
            cell.setAttribute('height', 120);
            cell.setAttribute('width', 120);
            cell.setAttribute('align', 'center');
            cell.setAttribute('valign', 'center');
            cell.classList.add('col' + j, 'row' + i);

            if (i == j) {
                cell.classList.add('diagonal0');
            }
            if (j == WIN_SIZE - i - 1) {
                cell.classList.add('diagonal1');
            }

            //la click se apeleaza set, care verifica daca un player a castigat, reincepe jocul, sau doar schimba randul jucatorului
            cell.identifier = identifier;
            cell.addEventListener('click', set);
            row.appendChild(cell);
            boxes.push(cell);
            identifier += identifier;
        }
    }

    document.getElementById('tictactoe').appendChild(board);
    startNewGame();
}

//initializare tabla joc cu spatii goale, jucatori.
function startNewGame() {
    score = {
        'X': 0,
        'O': 0
    };
    moves = 0;
    turn = 'X';
    boxes.forEach(function (square) {
        square.innerHTML = EMPTY;
    });
}

function win(clicked) {
    //separa dupa click elementele din tabel dupa claseele care le contin.
    var memberOf = clicked.className.split(/\s+/);
    for (var i = 0; i < memberOf.length; i++) {
        //se verifica daca elementele detinute de un jucator si care apartin aceleasi clase sunt mai multe de 3
        //row-urile din tabel, diagonalele etc.
        var testClass = '.' + memberOf[i];
        var items = contains('#tictactoe' + testClass, turn);

        if (items.length == WIN_SIZE) {
            return true;
        }
    }
    return false;
}

function contains(selector, text) {
    //cautare in board elementele cu o anumita clasa si returnarea lor.
    var elements = document.querySelectorAll(selector);
    return [].filter.call(elements, function (element) {
        return RegExp(text).test(element.textContent);
    });
}

function set() {
    if (this.innerHTML !== EMPTY) {
        return;
    }

    this.innerHTML = turn;
    moves += 1;
    score[turn] += this.identifier;
    //conditiile de continuare si reincepere
    if (win(this)) {
        alert('Winner: Player ' + turn);
        startNewGame();
    } else if (moves === WIN_SIZE * WIN_SIZE) {
        alert('Draw');
        startNewGame();
    } else {
        turn = turn === 'X' ? 'O' : 'X';
        document.getElementById('turn').textContent = 'Player ' + turn;
    }
}

init();