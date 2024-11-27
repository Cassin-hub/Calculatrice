let screen = document.querySelector("#calcul");
const btnNumbers = document.querySelectorAll(".button-number");
const btnOperators = document.querySelectorAll(".button-operator")
const btnResults = document.querySelectorAll(".button-result");
const btnClear = document.querySelectorAll(".button-clear");

for (const button of btnNumbers) {
    button.addEventListener("click", function () {
        screen.textContent += button.textContent;

    })

}

for (const buttonOperation of btnOperators) {
    buttonOperation.addEventListener("click", function () {
        screen.textContent += buttonOperation.textContent;
    })
}

function resultFunction() {
    for (const buttonResult of btnResults) {
        buttonResult.addEventListener("click", function () {
            const final = screen.textContent;
            try {
                const resultFinal = eval(final);
                screen.textContent = resultFinal;
            }
            catch (error) {
                screen.textContent = "erreur";

            }
        })
    }
}

function clearScreen() {
    for (const buttonClear of btnClear) {
        buttonClear.addEventListener("click", function () {
            const clear = "";
            screen.textContent = clear;

        })
    }
}

function keydownFunction() {
    document.addEventListener("keydown", function (e) {
        screen.textContent = e.key;
    })
}

resultFunction();

clearScreen();

keydownFunction();
//Putain de calculatrice fini bg !!!!