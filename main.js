function calcular(valor1, operacao, valor2) {
    if(valor1 == isNaN || valor2 == isNaN) {
        let txt = document.innerHTML("<br /><p>Impossivel calcular</p>");
        return txt;
    }else if(operacao == "NA"){
        let txt = document.innerHTML("<br /><p>Você deve selecionar um valor para operação</p>");
        return txt;
    }else if(operacao == "+"){
        let result = document.body.innerHTML("<br /><p>O resultado é: </p>" + (valor1 + valor2));
        return result;
    }else if(operacao == "-"){
        let result = document.body.innerHTML("<br /><p>O resultado é: </p>" + (valor1 - valor2));
        return result;
    }else if(operacao == "*"){
        let result = document.body.innerHTML("<br /><p>O resultado é: </p>" + (valor1 * valor2));
        return result;
    }else if(operacao == "/"){
        let result = document.body.innerHTML("<br /><p>O resultado é: </p>" + (valor1 / valor2));
        return result;
    }
}