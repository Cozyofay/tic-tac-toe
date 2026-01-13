const boxes = document.querySelectorAll(".box")
/*console.log(boxes)
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
*/

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
function checkWinner(gameboard, boxes){
    const winngCombinations = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    for (combo of winngCombinations){
    const [a,b,c] = combo;

    if (Gameboard.board[a] !== "" && Gameboard.board[a] == Gameboard.board[b] && Gameboard.board[a] ==  Gameboard.board[c]){
        if (Gameboard.board[a] == "X"){
            alert("player 1 wins")
            Gameboard.reset() 
            }else{
            alert("player 2 wins")
            Gameboard.reset() 
        }
        }
}
    
}
const player1 = {
    name: "player1",
    marker: "X"
}
const player2 = {
    name: "player2",
    marker: "O"
}


let currentPlayer = player1;
for (let box of boxes) {
        box.addEventListener("click", () => {
            id = box.id
            Gameboard.placeMark(id, currentPlayer.marker)       
            if(box.textContent!==""){return;}
            box.textContent=currentPlayer.marker;
            currentPlayer = currentPlayer === player1 ? player2 : player1;
            

            
/*
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
    });
    
}




const reset = document.querySelector(".Reset")
reset.addEventListener("click", () => {
    for (let box of boxes) {
        box.textContent = ""
        Gameboard.reset() = ["","","","","","","","",""]
    }
})
