

const container = document.querySelector(".container")
const choice = document.querySelector('#choice')
const clear = document.querySelector('#clear')

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
        cell.style.border = "1px solid black";
        container.appendChild(cell)
    }
}








