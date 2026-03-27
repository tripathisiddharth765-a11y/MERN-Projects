const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const btn = document.getElementById('btn');
const para = document.getElementById('para');
const temp = document.getElementById('input');

btn.onclick = function () {
    let num = parseFloat(temp.value);
    let temp1;

    if (check1.checked) {
        temp1 = (num - 32) / 1.8;
        para.textContent = temp1.toFixed(2) + " °C";
    }

    else if (check2.checked) {
        temp1 = (num * 9 / 5) + 32;
        para.textContent = temp1.toFixed(2) + " °F";
    }

}