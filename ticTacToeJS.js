let boxBtn = document.querySelectorAll(".boxBtn");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const enableBoxes = () =>{
    for(let box of boxBtn){
        box.disabled=false;
        box.innerText="";
    }
}
boxBtn.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box Was Clicked");
        if(turnO){
            box.innerText = "O";
            turnO=false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxBtn){
        box.disabled=true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg-msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val = boxBtn[pattern[0]].innerText;
        let pos2Val = boxBtn[pattern[1]].innerText;
        let pos3Val = boxBtn[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" & pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
