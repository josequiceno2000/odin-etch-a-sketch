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