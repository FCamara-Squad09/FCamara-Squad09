function calcularViagem() {

var cotacaoNZ = 4.0;

var dias = parseInt(document.querySelector("#dias").value);
var passagem = parseFloat(document.querySelector("input[name=passagem]:checked").value);
var hospedagem = parseFloat(document.querySelector("input[name=hospedagem]:checked").value);
var alimentacao = parseFloat(document.querySelector("input[name=alimentacao]:checked").value);
var transporte = parseFloat(document.querySelector("input[name=transporte]:checked").value);

var passeios = 0;
var passeioInputs = document.querySelectorAll("input[name=passeio]:checked");
for (var i = 0; i < passeioInputs.length; i++) {
	passeios += parseFloat(passeioInputs[i].value);
}

var totalNZ = passagem + hospedagem*dias + alimentacao*dias + transporte*dias + passeios;
var totalBR = totalNZ * cotacaoNZ;



document.querySelector("#n-dias").innerHTML = dias;
document.querySelector("#moeda-nz").innerHTML = "NZ$ " + totalNZ.toFixed(2);
document.querySelector("#moeda-br").innerHTML = "R$ " + totalBR.toFixed(2);
document.querySelector("#resultado").classList.remove("esconder");
}

document.querySelector("#btnCalcular").onclick = calcularViagem;