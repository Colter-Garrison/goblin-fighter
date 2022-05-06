import { renderElf } from './elf-utils.js';

const defeatedNumberEl = document.getElementById('defeated-number');
const adventurerHpEl = document.getElementById('adventurer-hp');
const adventurerImgEl = document.getElementById('adventurer-img');
const form = document.querySelector('form');
const elfListEl = document.querySelector('.elves');

let defeatedElvesCount = 0;
let playerHp = 100;
let elves = [
    { name: 'Legolas', hp: 30 },
    { name: 'Galadriel', hp: 80 },
];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const elfName = data.get('elf-name');

    const newElf = {
        name: elfName || Math.ceil(Math.random() * 1000),
        hp: Math.ceil(Math.random() * 50),
    };

    elves.push(newElf);

    // console.log('Elf name:', newElf);
    displayElves();
});

function displayElves() {
    elfListEl.textContent = ' ';

    for (let elf of elves) {
        const elfEl = renderElf(elf);
        elfEl.addEventListener('click', () => {
            elfClickHandler(elf);
        });
        elfListEl.append(elfEl);
    }
}

displayElves();

function elfClickHandler(elf) {
    // console.log(`I am clicking on ${elf.name}`);
    if (elf.hp === 0) return;
    if (playerHp === 0) return;

    const playerHit = Math.random();

    if (playerHit < 1) {
        elf.hp = elf.hp - 10;
        console.log(`elf hp is: ${elf.hp}`);
        displayElves;
        alert(`You hit ${elf.name}!`);
        if (elf.hp === 0) {
            defeatedElvesCount++;
            defeatedNumberEl.textContent = defeatedElvesCount;
        }
    } else {
        alert('Ha! You missed!');
    }

    const elfHit = Math.random();

    if (elfHit < 1) {
        playerHp = playerHp - 10;
        console.log(`player hp is: ${playerHp}`);
        adventurerHpEl.textContent = playerHp;
        alert(`${elf.name} hit you!`);
        if (playerHp === 0) {
            alert('Game Over');
            adventurerImgEl.classList.add('game-over');
        }
    } else {
        alert(`${elf.name} tried to hit you and missed!`);
    }
}