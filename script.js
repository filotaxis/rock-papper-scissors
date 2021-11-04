const Game = (() => {
    const playerDisplay = document.querySelector(".player>img");
    const oponentDisplay = document.querySelector(".oponent>img");
    const textDisplay = document.querySelector(".message>p");
    const stocksOponent = document.querySelector(".stocks-oponent");
    const stocksPlayer = document.querySelector(".stocks-player");
    const choicesType = ["grass", "fire", "water"];
    
    let counterPlayer = 0;
    let counterComputer = 0;
    
    const playSet = () => {
            playRound();
    }

    const playRound = () => {
        const choices = ["bulbasaur", "charmander", "squirtle"];
        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
            const human = parseInt(button.getAttribute("data-id"));   
            const computer = Math.floor(Math.random() * 3);
            oponentDisplay.src = `images/${choices[computer]}_front.png`; 
            playerDisplay.src = `images/${choices[human]}_back.png`;
            rules(human, computer);
                console.log(`🖥️:${counterComputer} - 🤷‍♂️${counterPlayer}`);
                if (counterComputer >= 3 || counterPlayer >= 3) {
                    console.log("se acabó!");
                }
                            
            });
    
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
        playSet,
    }
})();

Game.playSet();





