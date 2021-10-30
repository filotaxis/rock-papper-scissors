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


