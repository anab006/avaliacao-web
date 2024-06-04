function dividirNumeros(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var resultadoDividir = numero1 / numero2
    var teste = document.getElementById("resultadoDividir")
    teste.innerHTML=resultadoDividir
    if ((numero2==0)){
        alert("Seu numero não pode ser 0, digite outro numero")}
}

function mediaNotas(){
    var numero03 = document.getElementById("num03").value;
    var numero03Alterado=parseInt(numero03);
    var numero04 = document.getElementById("num04").value;
    var numero04Alterado=parseInt(numero04);
    var numero05 = document.getElementById("num05").value;
    var numero05Alterado=parseInt(numero05);
    var numero06 = document.getElementById("num06").value;
    var numero06Alterado=parseInt(numero06);
    var resultado = numero03Alterado+numero04Alterado+numero05Alterado+numero06Alterado
    var media = resultado/4
    if ((media>5))
    alert("Aluno aprovado, sua média é de"+media);
    else ((media<5))
    alert("Aluno retido, sua média é de"+media);
}

function somarNumeros(){
    var numero7 = parseInt(document.getElementById("num7").value);
    var numero8 = parseInt(document.getElementById("num8").value);
    var numero9 = parseInt(document.getElementById("num9").value);
    var resultado = numero7 + numero8
    if ((numero9<resultado))
        alert(resultado+" é maior que "+numero9);
    else ((numero9>resultado))
        alert (resultado=" é menor que "+numero9);
}

function retangulo(){
    var numero10 = parseInt(document.getElementById("num10").value);
    var numero11 = parseInt(document.getElementById("num11").value);
    var resultado = numero10 * numero11
    var teste = document.getElementById("resultadoretangulo");
}

function reajuste () {
    var num12 = parseInt(document.getElementById("numteste1").value);
    var num13 = parseInt(document.getElementById("numteste2").value);
    var resultadoReajuste = num12 * (num13/100)+num12
    var teste = document.getElementById("resultadoReajusteA");
    teste.innerHTML=resultadoReajuste
}