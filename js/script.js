const container = document.querySelector("#container");

for (let i = 0; i < 16 ** 2; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.style.width = "2px";
    squareDiv.style.height = "2px";
    squareDiv.style.backgroundColor = "orange";
    squareDiv.style.border = "1px solid green";
    squareDiv.classList.add("squareDiv");
    container.appendChild(squareDiv);
}