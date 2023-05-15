

const container = document.querySelector(".container")
const choice = document.querySelector('#choice')
const clear = document.querySelector('#clear')
const rainbow = document.querySelector('#rainbow')
const black = document.querySelector('#black')


createGrid(16);

choice.addEventListener('click', () => {
    let num = prompt('Select the size of your grid (1-100)')
    if (num < 1 || num > 100) {
        prompt('Select the size of your grid (1-100)')
    }
    container.innerHTML = "";
    createGrid(num)
}
)

clear.addEventListener('click', () => {
    container.innerHTML = "";
    createGrid(16);
})

function createGrid(n) {
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    for (let i = 0; i < (n * n); i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell")
        container.appendChild(cell)
        cell.addEventListener('mouseover', () => {
            if (black.checked != false) {
                cell.style.backgroundColor = "black";
            } else if (rainbow.checked != false) {
                rainbowColors()
                cell.style.backgroundColor = color;
            }
        })
    }
}


function rainbowColors() {
    let r = parseInt(Math.floor(Math.random() * 256))
    let g = parseInt(Math.floor(Math.random() * 256))
    let b = parseInt(Math.floor(Math.random() * 256))
    return color = `rgb(${r}, ${g}, ${b})`
}





