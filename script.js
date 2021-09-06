let COLOR = "#000000";
let MODE = "default";
const container = document.querySelector('.container');

function createGrid(size){
    if (MODE === "default"){
        container.setAttribute('style', `grid: repeat(${size}, 1fr) / repeat(${size}, 1fr);box-shadow: 0 0 10px ${COLOR};`);
    } else {
        container.setAttribute('style', `grid: repeat(${size}, 1fr) / repeat(${size}, 1fr);box-shadow: 0 0 10px #FFFFFF;`);
    }
    for (let i = 0; i < size**2; i++) {
        let div = document.createElement('div');
        div.setAttribute('id', `${i}`);
        div.classList.add('grid-item');
        div.addEventListener('mouseenter', changeColor);
        container.appendChild(div);
    } 
}

function changeColor(e){
    let tempColor;
    if (MODE == "rainbow") {
        tempColor = `hsl(${getRandomNumber(360)}deg,${getRandomNumber(100)}%,${getRandomNumber(100)}%)`;
        e.target.style[`background-color`] = tempColor;
        return;
    } 
    e.target.style[`background-color`] = COLOR;
}

const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };

function resetAll(){
    container.innerHTML = "";
    createGrid(rangeslider.value);

}
const divs = document.querySelectorAll('.grid-item');
const clearBtn = document.querySelector('#clearBtn');
const rangeslider = document.getElementById("sliderRange");
const sliderOutput = document.getElementById("sliderVal");
const rainbowBtn = document.querySelector('#rainbowBtn');
const colorBtn = document.querySelector('#colorBtn');
const colorPicker = document.getElementById("colorPicker");

colorPicker.onchange = (e) => {COLOR = e.target.value; container.style.boxShadow = `0 0 8px ${COLOR}`};
clearBtn.addEventListener('click',resetAll);
colorBtn.addEventListener('click', () => {MODE = "default"; resetAll();});
rainbowBtn.addEventListener('click', () =>{MODE = "rainbow";resetAll();});
sliderOutput.innerHTML = `${rangeslider.value} x ${rangeslider.value}`;
rangeslider.oninput = function() {
    sliderOutput.innerHTML = `${this.value} x ${this.value}`;
    resetAll();
}

createGrid(rangeslider.value);