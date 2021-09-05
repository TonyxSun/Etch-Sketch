const container = document.querySelector('.container');
for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.setAttribute('id', `${i}`);
    div.classList.add('grid-item');
    container.appendChild(div);

}


divs = document.querySelectorAll('.grid-item');
divs.forEach(div => div.addEventListener('mouseenter', e => div.classList.add('hovered')));
// clearBtn = document.qu