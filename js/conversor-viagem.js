function obtemDadosViagem() {
	var escolhas = {
		dias: parseInt(document.querySelector("#dias").value),
		passagem: parseFloat(document.querySelector("input[name=passagem]:checked").value),
		hospedagem: parseFloat(document.querySelector("input[name=hospedagem]:checked").value),
		alimentacao: parseFloat(document.querySelector("input[name=alimentacao]:checked").value),
		transporte: parseFloat(document.querySelector("input[name=transporte]:checked").value),
		passeios: contaPasseios()
	}
	return escolhas;
}

function contaPasseios () {
	var passeios = 0;
	var passeioInputs = document.querySelectorAll("input[name=passeio]:checked");
	for (var i = 0; i < passeioInputs.length; i++) {
		passeios += parseFloat(passeioInputs[i].value);
	}
	return passeios;
}

function calculaValor() {

	var escolhas = obtemDadosViagem();	

	var totalViagem = escolhas.passagem + (escolhas.hospedagem * escolhas.dias) + (escolhas.alimentacao * escolhas.dias) + (escolhas.transporte * escolhas.dias) + escolhas.passeios; 
	var totalBr = totalViagem * COTACAO;

	var valorFinal = {
		naMoeda: totalViagem,
		emReal: totalBr,
		numeroDeDias: escolhas.dias
	}

	return valorFinal;
}

function escreveNaTela() {

	var valor = calculaValor();

	document.querySelector("#n-dias").innerHTML = valor.numeroDeDias;
	document.querySelector("#moeda-nz").innerHTML = "NZ$ " + valor.naMoeda.toFixed(2);
	document.querySelector("#moeda-br").innerHTML = "R$ " + valor.emReal.toFixed(2);
	document.querySelector("#resultado").classList.remove("esconder");
}

document.querySelector("#btnCalcular").onclick = escreveNaTela;