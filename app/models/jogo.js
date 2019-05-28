function Jogo(dados = 5, lados = 6) {
	console.log('model: executar constructor de jogo');
	this.dados = dados;
	this.lados = dados;
	this.pontos = 0;
	this.n = 0;

}

Jogo.prototype.novoJovo = function(){
     console.log('model: novoJovo');
     this.pontos = 0;
     this.n = 0;


ogo.prototype.lancarUmDado = function(){
     var valorAleatorio = Math.random(); //No valor [0,1]
     var lado = 1 + Math.random(valorAleatorio * (this.lados));
     return lado;
 }

 Jogo.prototype.laancarDados = function(){
 	console,log('model: laancarDados');
 	var lancamento = []
 	for (var i = 0; i < this.dados; i++) {
 		lancamento[i] = this.lancarUmDado();
 	}
 	return lancamento;
 	
 }

Jogo.prototype.contarDados = function(lancamento){
	var contagem = Array(this.lados+1).fill(0);
	for(var i = 0; i <lancamento.length; i++){
		var numero = lancamento[i];
		contagem[numero-1] += 1;
	}
	return contagem;
}



module.exports.Jogo = Jogo;

jogo = new Jogo();

lancamento = jogo.laancarDados();
console.log('dados sorteados: ', jogo.lancarUmDado()) 