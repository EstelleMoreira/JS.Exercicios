function somar(){
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);

    let resultado1 = num1 + num2;

    document.getElementById('resultado1').innerHTML = resultado1
}

function subtrair(){
    let num3 = parseFloat(document.getElementById('numero3').value);
    let num4 = parseFloat(document.getElementById('numero4').value);

    let resultado2 = num3 - num4;

    document.getElementById('resultado2').innerHTML = resultado2
}


function multiplicar(){
    let num5 = parseFloat(document.getElementById('numero5').value);
    let num6 = parseFloat(document.getElementById('numero6').value);

    let resultado3 = num5 * num6;

    document.getElementById('resultado3').innerHTML = resultado3
}


function dividir(){
    let num7 = parseFloat(document.getElementById('numero7').value);
    let num8 = parseFloat(document.getElementById('numero8').value);

    let resultado4 = num7 / num8;

    document.getElementById('resultado4').innerHTML = resultado4
}







