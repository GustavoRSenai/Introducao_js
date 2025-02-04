const somar=()=>{
    let n1= parseInt(document.getElementById("numero1").value) //define o valor da variavel conforme o que o input receber
    let n2= parseInt(document.getElementById("numero2").value)
    let soma= n1+n2


    document.getElementById("resultado").textContent = "O resultado da soma é: " + soma

}



