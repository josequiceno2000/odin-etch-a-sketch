const container = document.querySelector("#container");
let containerTotalWidth = container.offsetWidth;

for (let i = 0; i < 16 ** 2; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.style.width = "6.25%";
    squareDiv.style.height = "6.25%";
    squareDiv.style.backgroundColor = "lightblue";
    squareDiv.style.border = "1px solid #ccc";
    squareDiv.classList.add("squareDiv");
    container.appendChild(squareDiv);
}

container.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains("squareDiv")) {
        event.target.classList.add("hovered");
    }
});

// Button logic
const gridBtn = document.querySelector("#grid-size");
let userSquares;
gridBtn.addEventListener('click', () => {
    userSquares = prompt(`How many squares per side on this grid?`, 50);
    if (userSquares > 100) {
        userSquares = 100;
    }
    
})