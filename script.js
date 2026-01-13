const boxes = document.querySelectorAll(".box")

const Gameboard = (function(){ 
    let board = ["","","","","","","","",""];
    const getBoard = () => board;
    const placeMark = (index, mark) => {
        if (board[index]!=="") return false;
        board[index] = mark;
        return true
    }
    const reset = () => board.fill("");
    return {getBoard, placeMark, reset}
})()

const Player = (name, marker) => {(name, marker)}
const player1 = Player("player1", "X")
const player2 = Player("player2", "O")


const GameController = (() => {
    let currentPlayer = player1;

    const handleClick = (box) => {
        const index = Number(box.id)
        if (Gameboard.placeMark(index, currentPlayer.marker)){
            box.textContent = currentPlayer,marker;
            checkWinner();
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    }
    const setup = () => {
        for (let box of boxes) {
            box.addEventListener("click", () => handleClick(box))
        }
        reset.addEventListener("click", () => {
            Gameboard.reset()
            for (let box of boxes) box.textContent = ""
                currentPlayer = player1
            })
        }
    return {setup}
})();

function checkWinner(){
    const winngCombinations = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    for (let combo of winngCombinations){
    const [a,b,c] = combo;

    if (Gameboard.getBoard()[a] !== "" && Gameboard.getBoard()[a] == Gameboard.getBoard()[b] && Gameboard.getBoard()[a] ==  Gameboard.getBoard()[c]){
        if (Gameboard.getBoard()[a] == "X"){
            alert("player 1 wins")
            Gameboard.reset() 
            return
            }else if (Gameboard.getBoard()[a] == "O"){
            alert("player 2 wins")
            Gameboard.reset() 
            return
        }
        }
}
    
}



/*
console.log(boxes)
for (let i = 0; i < boxes.length; i++) {
    const elementId = boxes[i].id;
    console.log(elementId)
}

const winningCombinations = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]]

    function resetAll(){
    for (let box of boxes) {
        box.textContent = ""
        gameboard.gameboard = ["","","","","","","","",""]
    }
}

for (let box of boxes) {
        box.addEventListener("click", () => {
            id = box.id
            Gameboard.placeMark(id, currentPlayer.marker)       
            if(box.textContent!==""){return;}
            box.textContent=currentPlayer.marker;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
            console.log(Gameboard.getBoard())
            checkWinner();
            
    });
    
}
 
const reset = document.querySelector(".Reset")
reset.addEventListener("click", () => {
    for (let box of boxes) {
        box.textContent = ""
        Gameboard.reset()
    }
})
            

            if (gameboard.gameboard[0] !== "" && gameboard.gameboard[0] == gameboard.gameboard[1] && gameboard.gameboard[0] ==  gameboard.gameboard[2]){
                if (gameboard.gameboard[0] == "X"){
                    alert("player 1 wins")
                    resetAll()  
                    }else{
                    alert("player 2 wins")
                    resetAll()
                }
                }
        
            if (gameboard.gameboard[3] !== "" && gameboard.gameboard[3] == gameboard.gameboard[4] && gameboard.gameboard[3] ==  gameboard.gameboard[5]){
                    if (gameboard.gameboard[3] == "X"){
                        alert("player 1 wins")
                        resetAll()  
                        }else{
                        alert("player 2 wins")
                        resetAll()  
                    }
                    }
            if (gameboard.gameboard[6] !== "" && gameboard.gameboard[6] == gameboard.gameboard[7] && gameboard.gameboard[6] ==  gameboard.gameboard[8]){
                    if (gameboard.gameboard[6] == "X"){
                        alert("player 1 wins")
                        resetAll()  
                        }else{
                        alert("player 2 wins")
                        resetAll()  
                    }  
                    }
            if (gameboard.gameboard[0] !== "" && gameboard.gameboard[0] == gameboard.gameboard[3] && gameboard.gameboard[0] ==  gameboard.gameboard[6]){
                    if (gameboard.gameboard[0] == "X"){
                        alert("player 1 wins")
                        resetAll()    
                        }else{
                        alert("player 2 wins")
                        resetAll()  
                    }
                    }
            if (gameboard.gameboard[1] !== "" && gameboard.gameboard[1] == gameboard.gameboard[4] && gameboard.gameboard[1] ==  gameboard.gameboard[7]){
                    if (gameboard.gameboard[1] == "X"){
                        alert("player 1 wins")
                        resetAll()    
                        }else{
                        alert("player 2 wins")
                        resetAll()  
                    } 
                    }
            if (gameboard.gameboard[2] !== "" && gameboard.gameboard[2] == gameboard.gameboard[5] && gameboard.gameboard[2] ==  gameboard.gameboard[8]){
                    if (gameboard.gameboard[2] == "X"){
                        alert("player 1 wins")
                        resetAll()   
                        }else{
                        alert("player 2 wins")
                        resetAll()  
                    }
                    }
            if (gameboard.gameboard[0] !== "" && gameboard.gameboard[0] == gameboard.gameboard[4] && gameboard.gameboard[0] ==  gameboard.gameboard[8]){
                    if (gameboard.gameboard[0] == "X"){
                        alert("player 1 wins")
                        resetAll()   
                        }else{
                        alert("player 2 wins")
                        resetAll()  
                    }
                    }
            if (gameboard.gameboard[2] !== "" && gameboard.gameboard[2] == gameboard.gameboard[4] && gameboard.gameboard[2] ==  gameboard.gameboard[6]){
                    if (gameboard.gameboard[2] == "X"){
                        alert("player 1 wins")
                        resetAll()  
                        }else{
                        alert("player 2 wins")
                        resetAll()  
                    }
                    }    
                    */   





