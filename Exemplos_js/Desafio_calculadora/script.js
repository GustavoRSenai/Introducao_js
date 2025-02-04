const somar=()=>{
    let n1= parseInt(document.getElementById("numero1").value); //define o valor da variavel conforme o que o input receber
    let n2= parseInt(document.getElementById("numero2").value);
    let resul= n1+n2; //soma os valores


    document.getElementById("resultado").textContent = resul; //mostrar resultado na pagina do html

}
const subtrair=()=>{
    let n1= parseInt(document.getElementById("numero1").value); //define o valor da variavel conforme o que o input receber
    let n2= parseInt(document.getElementById("numero2").value);
    let resul= n1-n2;//subtrai os valores


    document.getElementById("resultado").textContent = resul;

}
const dividir=()=>{
    let n1= parseInt(document.getElementById("numero1").value); //define o valor da variavel conforme o que o input receber
    let n2= parseInt(document.getElementById("numero2").value);
    let resul= n1/n2;//divide os valores


    document.getElementById("resultado").textContent = resul;

}
const multiplicar=()=>{
    let n1= parseInt(document.getElementById("numero1").value);//define o valor da variavel conforme o que o input receber
    let n2= parseInt(document.getElementById("numero2").value);
    let resul= n1*n2;//multiplica os valores


    document.getElementById("resultado").textContent = resul;

}
const converter=()=>{
    let valor = parseFloat(document.getElementById("valor").value);
    let moeda = document.getElementById("moeda").value; //tranforma o valor do select em uma variavel
    let resultadoconv

    if (moeda == '1'){//define qual será o valor selecionado baseado no que for escolhido no 'select' do html
        resultadoconv = valor * 5.8 //multiplica pelo valor de conversao d dolar
    }else if (moeda == '2'){
        resultadoconv = valor * 6.05//multipica pelo valor de concersao do euro
    }

    document.getElementById("resultadoconv").textContent = `R$ ${resultadoconv.toFixed(2)}` //mostra o resultado da multiplicação com a adição de um 'R$' e de 2 casas apos a virgula por conta do "toFixed"
}


