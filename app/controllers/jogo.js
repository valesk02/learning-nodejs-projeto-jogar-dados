/*
Controller jogo:
Responsavel por:

*/






var model = require('../models/jogo');
var jogoModel = undefined;

module.exports.iniciar = function (application, req, res) {
	console.log('controller: iniciar');
	console.log('controller: cria instância de jogo');
	jogoModel = new model.Jogo();
	console.log('controller: atualiza view - novoJogo');
	res.render('novoJogo');
}