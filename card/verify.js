const input = document.getElementById('input');
const button = document.getElementById('btn');
const para = document.getElementById('para');


let sum = 0;
button.onclick = function () {
    let cardNumber = input.value;
    for (let i = 0; i < cardNumber.length; i++) {
        if (i % 2 == 1) {
            cardNumber[i] = cardNumber[i] * 2;
            if (cardNumber[i] > 9) {
                cardNumber[i] -= 9;
                sum = sum + cardNumber[i];
            }
        }
        else {
            sum = sum + cardNumber[i];
        }
    }

    if (sum % 10 == 0) {
        para.textContent = "your card is valid";
    }
    else {
        para.textContent = ("your card is not valid");
    }

}