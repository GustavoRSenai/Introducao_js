const somar=()=>{
    let n1= parseInt(document.getElementById("numero1").value); //define o valor da variavel conforme o que o input receber
    let n2= parseInt(document.getElementById("numero2").value);
    let resul= n1+n2;


    document.getElementById("resultado").textContent = resul;

}
const subtrair=()=>{
    let n1= parseInt(document.getElementById("numero1").value); //define o valor da variavel conforme o que o input receber
    let n2= parseInt(document.getElementById("numero2").value);
    let resul= n1-n2;


    document.getElementById("resultado").textContent = resul;

}
const dividir=()=>{
    let n1= parseInt(document.getElementById("numero1").value); //define o valor da variavel conforme o que o input receber
    let n2= parseInt(document.getElementById("numero2").value);
    let resul= n1/n2;


    document.getElementById("resultado").textContent = resul;

}
const multiplicar=()=>{
    let n1= parseInt(document.getElementById("numero1").value);//define o valor da variavel conforme o que o input receber
    let n2= parseInt(document.getElementById("numero2").value);
    let resul= n1*n2;


    document.getElementById("resultado").textContent = resul;

}
const converter=()=>{
    let valor = parseFloat(document.getElementById("valor").value);
    let moeda = document.getElementById("moeda").value;
    let resultadoconv

    if (moeda == '1'){
        resultadoconv = valor * 5.8
    }else if (moeda == '2'){
        resultadoconv = valor * 6.05
    }

    document.getElementById("resultadoconv").textContent = `R$ ${resultadoconv.toFixed(2)}`
}


