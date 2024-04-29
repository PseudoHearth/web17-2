function playGuessNumberGame() {
    var attempts = 0;
    var randomNumber = Math.floor(Math.random() * 101);
    console.log("Початок гри 'Вгадай число'");

    while (true) {
        var userGuess = parseInt(prompt("Введіть число від 0 до 100:"));

        if (isNaN(userGuess)) {
            alert("Ви ввели неправильне значення. Будь ласка, введіть число.");
            continue;
        }

        attempts++;

        if (userGuess === randomNumber) {
            console.log(new Date().toLocaleString(), "Спроба " + attempts + ": число " + userGuess + " – вгадали!");
            alert("Ви вгадали число " + randomNumber + " за " + attempts + " спроб!");
            break;
        } else {
            var message = getMessage(userGuess, randomNumber);
            console.log(new Date().toLocaleString(), "Спроба " + attempts + ": число " + userGuess + " – " + message);
            if (!confirm("Ви не вгадали. " + message + ". Спробуйте ще раз?")) {
                console.log("Гра завершена.");
                break;
            }
        }
    }
}


function getMessage(userGuess, randomNumber) {
    var difference = Math.abs(userGuess - randomNumber);
    if (difference <= 5) {
        return "дуже гаряче";
    } else if (difference <= 10) {
        return "гаряче";
    } else if (difference <= 20) {
        return "тепло";
    } else {
        return "холодно";
    }
}