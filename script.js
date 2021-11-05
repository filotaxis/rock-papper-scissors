const Game = (() => {
    const playerDisplay = document.querySelector(".player>img");
    const oponentDisplay = document.querySelector(".oponent>img");
    const textDisplay = document.querySelector(".message>p");
    const stocksOponent = document.querySelector(".stocks-oponent");
    const stocksPlayer = document.querySelector(".stocks-player");
    const displayBattle = document.querySelector(".display");
    const displayWinner = document.querySelector(".winner-display");
    const chooseButtons = document.querySelector(".choose");
    const playAgain = document.querySelector(".play-again");

    const choicesType = ["grass", "fire", "water"];

    let counterPlayer = 0;
    let counterComputer = 0;
    

    const play = () => {
        const choicesRed = ["bulbasaur", "charmander", "squirtle"];
        const choicesYellow = ["chikorita", "cyndaquill", "totodile"];
        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
            const human = parseInt(button.getAttribute("data-id"));   
            const computer = Math.floor(Math.random() * 3);
            oponentDisplay.src = `images/${choicesRed[computer]}_front.png`; 
            playerDisplay.src = `images/${choicesYellow[human]}_back.png`;
            rules(human, computer);
                if (counterComputer >= 3 || counterPlayer >= 3) {
                    displayBattle.style.display = "none";
                    chooseButtons.style.display = "none";
                    displayWinner.style.display = "flex";
                    playAgain.style.display = "flex";
                    let winner = counterComputer > counterPlayer ? "OPONENT" : "YOU";
                    let img = winner === "YOU" ? "yellow_front" : "red";
                    const announce = document.createElement("p");
                    const championImg = document.createElement("img");
                    announce.textContent = `${winner} won!`;
                    championImg.src = `images/${img}.png`;
                    displayWinner.appendChild(announce);
                    displayWinner.appendChild(championImg);
                }
                            
            });
    
        });

        playAgain.addEventListener("click", () => {
            displayBattle.style.display = "flex";
            chooseButtons.style.display = "flex";
            displayWinner.style.display = "none";
            playAgain.style.display = "none";
            oponentDisplay.src = "images/red.png"; 
            playerDisplay.src = "images/yellow.png";
            counterPlayer = 0;
            counterComputer = 0;
            stocksPlayer.innerHTML = "";
            stocksOponent.innerHTML = "";
            textDisplay.textContent = "RED trainer wants to battle with you!";
            displayWinner.innerHTML = "";
        });
    }

    const rules = (a, b) => {
        const pokeball = document.createElement("img");
        pokeball.src = "images/pokeball.png";
        
        if (a === b) {
            textDisplay.textContent = "it's a TIE!";
        }
        else if((a === 0 && b === 1) ||
                (a === 1 && b === 2) || 
                (a === 2 && b === 0)) {
            textDisplay.innerHTML = `OPONENT WINS! <img src="images/${choicesType[b]}.png"> type beats <img src="images/${choicesType[a]}.png"> type.`;
            stocksOponent.appendChild(pokeball);
            counterComputer++;
        }
        else {
            textDisplay.innerHTML = `YOU WIN! <img src="images/${choicesType[a]}.png"> type beats <img src="images/${choicesType[b]}.png"> type.`;
            stocksPlayer.appendChild(pokeball);
            counterPlayer++;
        }
    }

    return {
        play,
    }
})();

Game.play();





