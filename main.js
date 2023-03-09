function calcular(event){
    event.preventDefault();

    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let op = document.getElementById('operacao').value;

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    if(op == '' || op == 'NA'){
        alert("Escolha uma operação");
        return;
    }

   if(op == '+'){
        resultado = n1 + n2;
    }
    if(op == '-'){
        resultado = n1 - n2;
    }
    if(op == '*'){
        resultado = n1 * n2;
    }
    if(op == '/'){
        resultado = n1 / n2;
    }

    document.getElementById('resultado').style.display = 'block';
    document.getElementById('result').style.display = 'block';

    document.getElementById('result').innerHTML = resultado;
}

document.getElementById('resultado').style.display = 'none'
document.getElementById('result').style.display = 'none'

document.getElementById('formCalc').addEventListener('submit', calcular)