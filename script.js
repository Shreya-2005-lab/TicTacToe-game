let btn = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

btn.forEach(box => {
    box.addEventListener("click", () =>{
        if(turno){
            box.innerText = "O";
            turno = false;
        }
        else{
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableboxes = () =>{
    for(let box of btn){
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for(let box of btn){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

const checkWinner = ()=>{
    for(let pattern of winpatterns){
        let pos1value = btn[pattern[0]].innerText;
        let pos2value = btn[pattern[1]].innerText;
        let pos3value = btn[pattern[2]].innerText;

        if(pos1value != "" && pos2value != "" && pos3value != ""){
            if(pos1value === pos2value && pos2value === pos3value){
                showWinner(pos1value);
            }
        }
    }
};

const resetGame = () =>{
    turno = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);