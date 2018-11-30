function calc() {
    let numbers = document.querySelectorAll('input');
    let i1 = numbers[0].value;
    let i2 = numbers[1].value;
    numbers[2].value = parseInt(i1) + parseInt(i2);    
}

let button = document.querySelector('button');
button.addEventListener('click', calc);