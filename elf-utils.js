export function renderElf(elfData) {
    const elfEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    elfEl.classList.add('elf');

    nameEl.textContent = elfData.name;
    hpEl.textContent = elfData.hp < 0 ? 0 : elfData.hp;
    faceEl.textContent = elfData.hp > 0 ? '🧝‍♀️' : '☠️';

    if (elfData.hp < 0) {
        elfEl.classList.add('dead');
    }
    elfEl.append(faceEl, nameEl, hpEl);

    return elfEl;
}