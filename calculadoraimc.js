function calcularImc(){

    //Entrada
    let valorPeso = parseFloat(document.getElementById("peso").value.replace(",","."));
    let valorAltura = parseFloat(document.getElementById("altura").value.replace(",","."));

    //Processamento
    let valorImc = valorPeso / (valorAltura * valorAltura);
    
    // Classificação
    let classificacao = "";

    if (valorImc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (valorImc >= 18.5 && valorImc <= 24.99) {
        classificacao = "Peso normal";
    } else {
        classificacao = "Sobrepeso";
    }

    //Saída
    document.getElementById("resultado").textContent = "Seu IMC é: " + valorImc;
    document.getElementById("classificacao").textContent = "Classificação: " + classificacao;
}