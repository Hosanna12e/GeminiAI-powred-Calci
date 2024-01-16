const Buttonclicked = (value) => {
    const inputElement = document.getElementById('myInput');

    if (value === 'Del') {
        inputElement.value = inputElement.value.slice(0, -1);
    } else {
        inputElement.value += value;
    }
}


document.getElementById('num0').addEventListener('click', () => Buttonclicked('0'));
document.getElementById('num1').addEventListener('click', () => Buttonclicked('1'));
document.getElementById('num2').addEventListener('click', () => Buttonclicked('2'));
document.getElementById('num3').addEventListener('click', () => Buttonclicked('3'));
document.getElementById('num4').addEventListener('click', () => Buttonclicked('4'));
document.getElementById('num5').addEventListener('click', () => Buttonclicked('5'));
document.getElementById('num6').addEventListener('click', () => Buttonclicked('6'));
document.getElementById('num7').addEventListener('click', () => Buttonclicked('7'));
document.getElementById('num8').addEventListener('click', () => Buttonclicked('8'));
document.getElementById('num9').addEventListener('click', () => Buttonclicked('9'));
document.getElementById('Add').addEventListener('click', () => Buttonclicked('+'));
document.getElementById('Sub').addEventListener('click', () => Buttonclicked('-'));
document.getElementById('Mul').addEventListener('click', () => Buttonclicked('*'));
document.getElementById('Div').addEventListener('click', () => Buttonclicked('/'));
document.getElementById('Dec').addEventListener('click', () => Buttonclicked('.'));
document.getElementById('Mod').addEventListener('click', () => Buttonclicked('%'));
document.getElementById('Del').addEventListener('click', () => Buttonclicked('Del'));

const clearInput = () => {
    document.getElementById('myInput').value = '';
}

document.getElementById('Clear').addEventListener('click', clearInput);


window.clickAction = () => {
    Buttonclicked(value)
}