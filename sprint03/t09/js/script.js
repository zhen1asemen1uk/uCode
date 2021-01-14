let playAgain = document.querySelector('.playAgain'),
    box = document.querySelectorAll('.box'),
    counter = document.querySelector('.counter'),
    count = 0,
    player = "x",
    winIndex = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', play, { once: true });
}


function play() {
    let data = [];
    count++;

    document.querySelector('.player1').classList.remove('black');
    document.querySelector('.player2').classList.remove('black');

    if (count % 2 == 0) {
        document.querySelector('.player1').classList.add('black');
    } else {
        document.querySelector('.player2').classList.add('black');
    }

    counter.innerHTML = count;

    if (!this.innerHTML) {
        this.innerHTML = player;
    }

    for (var i in box) {
        if (box[i].innerHTML == player) {
            data.push((+(box[i].getAttribute('pos'))));
        }
    }


    if (checkWin(data)) {
        let winer = document.querySelector('.winer')
        winer.innerHTML = "Player " + player + " won!"
        document.querySelector('.bar').classList.add('green')
        document.querySelector('.num').classList.add('green')
        document.querySelector('.counter').classList.add('green')

        Array.from(box).forEach(elem => {
            if (elem.innerHTML == player) {
                elem.style.color = 'green'
            }
        })

    } else {
        let draw = true
        for (let i in box) {
            if (box[i].innerHTML == '')
                draw = false
        }
        if (draw) {
            let winer = document.querySelector('.winer')
            document.querySelector('.bar').classList.add('red')
            document.querySelector('.num').classList.add('red')
            document.querySelector('.counter').classList.add('red')
            winer.innerHTML = "It's a draw!"
        }
    }
    player = player == "x" ? 'o' : "x";
}
function checkWin(data) {
    for (let i in winIndex) {
        let win = true
        for (let j in winIndex[i]) {
            let id = winIndex[i][j]
            let ind = data.indexOf(id)
            if (ind == -1) {
                win = false
            }
        }
        if (win)
            return true

    }
}

playAgain.addEventListener('click', reload);

function reload() {
    location.reload()
}