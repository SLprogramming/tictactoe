console.log("hello world")
const boxs = document.querySelectorAll(".box");
const overlayTag = document.querySelector(".overLay");
const winnerMessage = document.querySelector(".winnerMessage");
const winnerTag = document.getElementsByClassName("winner")[1];
const buttonsTag = document.querySelector(".buttons");
const playAgainTag = document.querySelector(".playAgain");

let winner;
let finish=false;
let id2 = [];
let id1 = [];
let boxId = 1;
let isFirstPlayerTurn = true;
let player1Count =0;
let player2Count =0;
let selectedByPlayer1;
let selectedByPlayer2;
for (let box of boxs) {

    box.id=boxId;
    boxId++;
    box.addEventListener("click" , () => {
        if(box.classList.contains("mark")) {
            return;
        }
        if(!isFirstPlayerTurn) {
            box.classList.add("mark","player2");
            player2Count++;
            selectedByPlayer2 = document.getElementsByClassName("player2");
            for (let item of selectedByPlayer2) {
                
                const id = item.id;
                if (id2.includes(id)) {
                    continue;
                }
                id2  +=id;
                
            }
            GameObject(id2,"player2");
            finishF("player2");
            isFirstPlayerTurn=true;
        }else {
            box.classList.add("mark","player1");
            player1Count++;
            selectedByPlayer1 = document.getElementsByClassName("player1");
            isFirstPlayerTurn=false;
            for (let item of selectedByPlayer1) {
                
                const id = item.id;
                if (id1.includes(id)) {
                    continue;
                }
                id1  +=id;
                
            }
            GameObject(id1,"player1");
            finishF("player1");
        }
       
        
    })
}
const GameObject = (ids,player) => {
    if (ids.includes("1") && ids.includes("2") && ids.includes("3")) {
        
        return finish=true ,winner=player;
    }else if (ids.includes("4") && ids.includes("5") && ids.includes("6")) {
        
        return finish=true ,winner=player;
    }else if (ids.includes("7") && ids.includes("8") && ids.includes("9")) {
        
        return finish=true ,winner=player;
    }else if (ids.includes("1") && ids.includes("4") && ids.includes("7")) {
        
        return finish=true ,winner=player;
    }else if (ids.includes("2") && ids.includes("5") && ids.includes("8")) {
        
        return finish=true ,winner=player;
    }else if (ids.includes("3") && ids.includes("6") && ids.includes("9")) {
        
        return finish=true ,winner=player;
    }else if (ids.includes("1") && ids.includes("5") && ids.includes("9")) {
        
        return finish=true ,winner=player;
    }else if (ids.includes("3") && ids.includes("5") && ids.includes("7")) {
        
        return finish=true ,winner=player;
    }
    
}
const finishF = (player) => {
    if (finish) {
        overlayTag.style.display="block";
        winnerTag.append(player);
        playAgainTag.addEventListener("click",() => {
            playAgainFunction("player1");
            playAgainFunction("player2");
            overlayTag.style.display="none";
            winnerTag.innerHTML="";
        })
    }
}
const playAgainFunction = () => {
    id2 = [];
    id1 = [];
    finish=false;
    for (i=1;i<10;i++) {
        const boxsTags = document.getElementById(i);
        boxsTags.classList.remove("mark");
        boxsTags.classList.remove("player1");
        boxsTags.classList.remove("player2");
    }
    
}

