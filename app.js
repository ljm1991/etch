

const container = document.querySelector(".container")
const choice = document.querySelector('#choice')
const clear = document.querySelector('#clear')
const rainbow = document.querySelector('#rainbow')
const black = document.querySelector('#black')
const gray = document.querySelector('#grayscale')
const selectColor = document.querySelector('#selectColor')


createGrid(16);

choice.addEventListener('click', () => {
    do {
        let answer = prompt('Select the size of your grid using number values from 1-100')
        num = parseInt(answer);
    }
    while (num < 1 || num > 100 || isNaN(num) || num === " ")
    container.innerHTML = "";
    createGrid(num)
}
)

clear.addEventListener('click', () => {
    container.innerHTML = "";
    createGrid(16);
    black.checked = false;
    rainbow.checked = false;
    gray.checked = false;
    selectColor.value = "rgb(0, 0, 0)"
})

function createGrid(n) {
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    for (let i = 0; i < (n * n); i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell")
        container.appendChild(cell)
        cell.style.backgroundColor = "rgb(255, 255, 255)";
        cell.addEventListener('mouseover', () => { draw(cell) })
        cell.addEventListener('touchmove', () => { draw(cell) })
        selectColor.addEventListener('input', () => {
            black.checked = false;
            rainbow.checked = false;
            gray.checked = false;
            const chosenColor = selectColor.value;
            cell.addEventListener('mouseover', () => {
                userChoice(cell, chosenColor)
            })
            cell.addEventListener('touchmove', () => {
                userChoice(cell, chosenColor)
            })
        })
    }
}



function rainbowColors() {
    let r = parseInt(Math.floor(Math.random() * 256))
    let g = parseInt(Math.floor(Math.random() * 256))
    let b = parseInt(Math.floor(Math.random() * 256))
    return color = `rgb(${r}, ${g}, ${b})`
}

function grayScale(array) {
    for (let i = 2; i < array.length; i++) {
        const base = parseInt(array[i]);
        const newNumber = base - 26;
        return color = `rgb(${newNumber}, ${newNumber}, ${newNumber})`
    }
}


function draw(element) {
    if (black.checked != false) {
        element.style.backgroundColor = "black";
    } else if (rainbow.checked != false) {
        rainbowColors()
        element.style.backgroundColor = color
    } else if (gray.checked != false) {
        let bgColor = element.style.backgroundColor;
        let numbersOnly = bgColor.split("(")[1].split(")")[0];
        const numberArray = numbersOnly.split(",");
        grayScale(numberArray);
        element.style.backgroundColor = color;
    }
}

function userChoice(element, color) {
    if (black.checked !== true && gray.checked !== true && rainbow.checked !== true)
        element.style.backgroundColor = color;
}

