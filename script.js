let clickcount = 0;

const winningCombinations = [
    ['box1', 'box2', 'box3'],
    ['box4', 'box5', 'box6'],
    ['box7', 'box8', 'box9'],
    ['box1', 'box4', 'box7'],
    ['box2', 'box5', 'box8'],
    ['box3', 'box6', 'box9'],
    ['box1', 'box5', 'box9'],
    ['box3', 'box5', 'box7']
];

function checkWin(playerClass) {
    const hasClass = (id) =>
        document.getElementsByClassName(id)[0].classList.contains(playerClass);

    for (const combo of winningCombinations) {
        if (combo.every(id => hasClass(id))) {
            setTimeout(() => {
                alert(`${playerClass.toUpperCase()} wins!`);
                location.reload();
            }, 100);
            return;
        }
    }


    if (clickcount === 8) {
        setTimeout(() => {
            alert("It's a draw!");
            location.reload();
        }, 100);
    }
}


function updateBox(box) {
    if (box.innerHTML === '' && clickcount < 9) {
        if (clickcount % 2 === 0) {
            box.innerHTML = `<img src="circle.svg" width="30" height="30">`;
            box.classList.add('circle');
            checkWin('circle');
        } else {
            box.innerHTML = `<img src="cross.svg" width="30" height="30">`;
            box.classList.add('cross');
            checkWin('cross');
        }
        clickcount++;
    }
}


const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => updateBox(box));
});


document.querySelector('.reset').addEventListener('click', () => {
    location.reload();
});
