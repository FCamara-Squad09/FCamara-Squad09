function obtemDadosViagem() {
	let dias = parseInt(document.querySelector("#dias").value);

	let passagem = document.querySelector("input[name=passagem]");

	if (! passagem.checked){
		console.log("erro");
		return;
	} else {
		return parseFloat(passagem.value);
	} 	

	

    /*	let escolhas = {
		dias: parseInt(document.querySelector("#dias").value),
		passagem: parseFloat(document.querySelector("input[name=passagem]:checked").value),
		hospedagem: parseFloat(document.querySelector("input[name=hospedagem]:checked").value),
		alimentacao: parseFloat(document.querySelector("input[name=alimentacao]:checked").value),
		transporte: parseFloat(document.querySelector("input[name=transporte]:checked").value),
		passeios: contaPasseios()
	}
	return escolhas;*/
}

function contaPasseios () {
	let passeios = 0;
	let passeioInputs = document.querySelectorAll("input[name=passeio]:checked");
	for (let i = 0; i < passeioInputs.length; i++) {
		passeios += parseFloat(passeioInputs[i].value);
	}
	return passeios;
}

function calculaValor() {

	let escolhas = obtemDadosViagem();	

	let totalViagem = escolhas.passagem + (escolhas.hospedagem * escolhas.dias) + (escolhas.alimentacao * escolhas.dias) + (escolhas.transporte * escolhas.dias) + escolhas.passeios; 
	let totalBr = totalViagem * COTACAO.moeda;

	let valorFinal = {
		naMoeda: totalViagem,
		emReal: totalBr,
		numeroDeDias: escolhas.dias,
		cambio: COTACAO.codigo
	}

	return valorFinal;
}

function escreveNaTela() {

	let valor = calculaValor();

	document.querySelector("#n-dias").textContent = valor.numeroDeDias;

	document.querySelector("#moeda-local").textContent = valor.cambio + " " + valor.naMoeda.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2});
	
	document.querySelector("#moeda-br").textContent = "R$ " + valor.emReal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2});
	document.querySelector("#resultado").classList.remove("esconder");
	let body = document.body.clientHeight;
	window.scrollTo(0, body);
}

function voltarTopoTela(){
	window.scrollTo(0,0);	
}

document.querySelector(".btn-topo").onclick = voltarTopoTela;
document.querySelector("#btnCalcular").onclick = escreveNaTela;
