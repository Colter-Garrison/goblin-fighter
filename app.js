import { renderElf } from './elf-utils.js';

const defeatedNumberEl = document.getElementById('defeated-number');
const adventurerHp = document.getElementById('adventurer-hp');
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
  
}