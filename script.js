const playerDisplay = document.querySelector(".player>img");
const oponentDisplay = document.querySelector(".oponent>img");
const textDisplay = document.querySelector(".message>p");
const stocksOponent = document.querySelector(".stocks-oponent");
const stocksPlayer = document.querySelector(".stocks-player");

class Player{
    constructor(choice) {
        this.choice = choice
    }

    set choice(choice) {
        this.choice = choice;
    }

    get choice() {
        return this.choice;
    }

}


const choices = ["bulbasaur", "charmander", "squirtle"];
const choicesType = ["grass", "fire", "water"];

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const human = parseInt(button.getAttribute("data-id"));   
        const computer = Math.floor(Math.random() * 3);
        // console.log(`${choices[human]} - ${choices[computer]}`);
        oponentDisplay.src = `images/${choices[computer]}_front.png`; 
        playerDisplay.src = `images/${choices[human]}_back.png`;
        rules(human, computer);
        
    });
    
    }
);



const rules = (a, b) => {
    const pokeball = document.createElement("img");
    pokeball.src = "images/pokeball.png";
    
    if (a === b) {
        textDisplay.textContent = "it's a TIE!";
    }
    else if((a === 0 && b === 1) ||
            (a === 1 && b === 2) || 
            (a === 2 && b === 0)) {
        textDisplay.innerHTML = `OPONENT WINS! \r\n <img src="images/${choicesType[b]}.png"> type beats <img src="images/${choicesType[a]}.png"> type.`;
        stocksOponent.appendChild(pokeball);
    }
    else {
        textDisplay.innerHTML = `YOU WIN! \r\n <img src="images/${choicesType[a]}.png"> type beats <img src="images/${choicesType[b]}.png"> type.`;
        stocksPlayer.appendChild(pokeball);
    }
}


