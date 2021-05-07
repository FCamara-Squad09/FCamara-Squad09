function obtemDadosViagem() {
	let dias = parseInt(document.querySelector("#dias").value);

	let passagem = document.querySelector("input[name=passagem]:checked");
	let hospedagem = document.querySelector("input[name=hospedagem]:checked");
	let alimentacao = document.querySelector("input[name=alimentacao]:checked");
	let transporte = document.querySelector("input[name=transporte]:checked");

	if (dias < 1) {
		console.log("errinho");
		return
	}

	if (passagem == null) {
		console.log("erro na passagem");
		return
	}

	if (hospedagem == null) {
		console.log("erro na hospedagem");
		return
	}

	if (alimentacao == null) {
		console.log("erro na alimentacao");
		return
	}

	if (transporte == null) {
		console.log("erro no transporte");
		return
	}

	let escolhas = {
		dias: dias,
		passagem: parseFloat(passagem.value),
		hospedagem: parseFloat(hospedagem.value),
		alimentacao: parseFloat(alimentacao.value),
		transporte: parseFloat(transporte.value),
		passeios: contaPasseios()
	};	

	return escolhas;
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
