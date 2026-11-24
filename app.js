const container = document.querySelector(".container");
const button = document.querySelector(".btn");
//flex: 0 0 calc(100% / 16);


function createGrid(length){
    container.innerHTML = "";
    document.documentElement.style.setProperty('--cols', length);
    
    for (let i = 0; i < length * length; i++)
    {
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }
}

button.addEventListener("click", () => {
    const input = Number(prompt("Enter the grid"));

    if (input > 0 && input <= 100)
    {
        createGrid(input);
    }
    else if (input !== 0) { // Avoids alerting if the user clicks Cancel
        alert("Please enter a valid number between 1 and 100.");
    }
})

container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("box")) {
        event.target.style.backgroundColor = "black";
    }
});

createGrid(16);