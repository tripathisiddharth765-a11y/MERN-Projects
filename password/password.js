const btn = document.getElementById('checkBtn');
const para = document.getElementById('result');

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+|}{:><";

let testPassword = "";
let Password = "";

btn.onclick = function() {      
    testPassword = "";           
    Password = "";               

    testPassword += uppercase;
    testPassword += lowercase;
    testPassword += symbols;
    testPassword += numbers;

    for (let i = 0; i < 12; i++) {
        const index = Math.floor(Math.random() * testPassword.length);
        Password += testPassword[index];
    }

    para.textContent = `The generated password is: ${Password}`;
}