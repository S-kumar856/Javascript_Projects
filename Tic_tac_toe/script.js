const boxes = document.querySelectorAll(".box");
const resetbtn = document.querySelector(".reset");

const NewGame =document.querySelector(".newbtn");
const winnerMsg = document.querySelector(".msg");
const result = document.querySelector(".result");

let turnO = true;

const winCondititons = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]


boxes.forEach(box => {
    box.addEventListener('click', () => {

        // toggling "X" & "O" 

        if(turnO){
            box.innerText = "O";
            turnO=false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
    
});

// after game win boxes should be disable
const boxDisable = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}


const boxEnable = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

// winner message alert
const WinnerMsg = (winner) =>{
    winnerMsg.innerText = `Congratulations , Winner is ${winner} `;
    result.classList.remove("hide");
    boxDisable( )

} 

//  reset button
const resetGame = () =>{
    turnO = true;
    boxEnable();
    result.classList.add("hide");


}

// winner condition checking 

const checkWinner = () =>{
    for (let condition of winCondititons){
        let pos1Val = boxes[condition[0]].innerText;
        let pos2Val = boxes[condition[1]].innerText;
        let pos3Val = boxes[condition[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){

            if (pos1Val === pos2Val && pos2Val === pos3Val){
                WinnerMsg(pos1Val);
                console.log("winner")
            }
        }

    }
}; 

//  reset function
resetbtn.addEventListener('click',() => {
    resetGame();

});

// newgame 

NewGame.addEventListener('click', () => {
    resetGame();
})
