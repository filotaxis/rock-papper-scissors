const playerDisplay = document.querySelector(".player>img");
const oponentDisplay = document.querySelector(".oponent>img");
const textDisplay = document.querySelector(".message>p");
const initialText = "bryan trainer wants to battle with you";
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

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const human = parseInt(button.getAttribute("data-id"));   
        const computer = Math.floor(Math.random() * 3);
        console.log(`${choices[human]} - ${choices[computer]}`);
        rules(human, computer);
        oponentDisplay.src = `images/${choices[computer]}_front.png`; 
        playerDisplay.src = `images/${choices[human]}_back.png`;
    });
    
    }
);



const rules = (a, b) => {
    if (a === b) {
        console.log("tie");
    }
    else if((a === 0 && b === 1) ||
            (a === 1 && b === 2) || 
            (a === 2 && b === 0)) {
        console.log("computer wins");
    }
    else {
        console.log("human wins");
    }
}


