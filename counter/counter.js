const btn1 = document.getElementById('increment');
const btn2 = document.getElementById('decrement');
const btn3 = document.getElementById('reset');
const label = document.getElementById('label');
let count = 0;

btn1.onclick = function () {
    count++;
    label.textContent = count;
}
btn2.onclick = function () {
    if (count > 0) {
        count--;
        label.textContent = count;
    }
}
btn3.onclick = function () {
    count = 0;
    label.textContent = count;
}    