const boxes = document.getElementsByClassName("box")
let player1 = "X";
let player2 = "O";
let currentPlayer = player1;
for (let box of boxes) {
        box.addEventListener("click", () => {
            if(box.textContent!==""){return;}
            box.textContent=currentPlayer;
            currentPlayer = currentPlayer === player1 ? player2 : player1;         
    });
}   
const reset = document.querySelector(".Reset")
reset.addEventListener("click", () => {
    for (let box of boxes) {
        box.textContent = ""
    }
})