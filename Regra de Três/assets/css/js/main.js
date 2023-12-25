document.getElementById('calculate').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 === 0){
        document.getElementById('resultado').textContent = 'Inválido';
        return;
    }

    let resultado = (num3 * num2) / num1;

    if(Number.isInteger(resultado)){
        document.getElementById('resultado').textContent = resultado;
    } else {
        document.getElementById('resultado').textContent = resultado.toFixed(2).replace('.', ',');
    }
    
})