console.log("hello world")
const boxs = document.querySelectorAll(".box");
const overlayTag = document.querySelector(".overLay");
const winnerMessage = document.querySelector(".winnerMessage");
const drawTag = document.getElementsByClassName("winner")[0];
const winnerTag = document.getElementsByClassName("winner")[1];
const buttonsTag = document.querySelector(".buttons");
const playAgainTag = document.querySelector(".playAgain");
const signTAg = document.querySelector(".sign");
const circle = `<div class="circle"></div>`;
const cross = `<div class="cross">
    <div class="bar1 bars"></div>
    <div class="bar2 bars"></div>
    </div>`;
const trophy = `<i class="fa-solid fa-trophy-star"></i>`
let isDraw=false;
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
            box.innerHTML=cross;
            selectedByPlayer2 = document.getElementsByClassName("player2");
            for (let item of selectedByPlayer2) {
                
                const id = item.id;
                if (id2.includes(id)) {
                    continue;
                }
                id2  +=id;
                
            }
            GameObject(id2,"player2");
            draw();
            finishF("player2");
            isFirstPlayerTurn=true;
        }else {
            box.classList.add("mark","player1");
            player1Count++;
            box.innerHTML=circle;
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
            draw();
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
        drawTag.innerHTML="Winner is";
        overlayTag.style.display="block";
        winnerTag.append(player);
        if (player=="player1") {
            isFirstPlayerTurn=false;
        }else {
            isFirstPlayerTurn=true;
        }
        
    }else if (isDraw) {
        drawTag.innerHTML="DRAW!";
        overlayTag.style.display="block";
    }
    playAgainTag.addEventListener("click",() => {
        playAgainFunction();
        overlayTag.style.display="none";
        winnerTag.innerHTML="";
    })
}
const playAgainFunction = () => {
    id2 = [];
    id1 = [];
    player1Count=0;
    player2Count=0;
    finish=false;
    isDraw=false;
    for (i=1;i<10;i++) {
        const boxsTags = document.getElementById(i);
        boxsTags.innerHTML="";
        boxsTags.classList.remove("mark");
        boxsTags.classList.remove("player1");
        boxsTags.classList.remove("player2");
    }
    
}
const draw = () => {
        if (!finish && player1Count==5 || player2Count==5) {
            isDraw = true;
        }
}
