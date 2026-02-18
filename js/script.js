const container = document.querySelector("#container");

function drawGrid(squaresPerSide) {
    container.innerHTML = "";
    const size = 100 / squaresPerSide;

    for (let i = 0; i < squaresPerSide ** 2; i++) {
        let squareDiv = document.createElement("div");

        squareDiv.style.width = `${size}%`;
        squareDiv.style.height = `${size}%`;

        squareDiv.style.backgroundColor = "lightblue";
        squareDiv.style.border = "1px solid #ccc";
        squareDiv.classList.add("squareDiv");
        container.appendChild(squareDiv);
    }
}


container.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains("squareDiv")) {
        event.target.classList.add("hovered");
    }
});

// Initial call to have the default 16x16 grid
drawGrid(16);

// Button logic
const gridBtn = document.querySelector("#grid-size");
gridBtn.addEventListener('click', () => {
    let userSquares = prompt(`How many squares per side on this grid? (Max 100)`, 50);
    
    userSquares = parseInt(userSquares);

    if (isNaN(userSquares) || userSquares < 1 || userSquares > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else  {
        drawGrid(userSquares);
    }
});