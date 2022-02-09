
//serve para dizer aoa javaScript que e uma funacao
		//e o nome da nossa funcao
function saudacao(nome){
	console.log("Ola, " + nome);
}

saudacao("Arsenio");
saudacao("Jose");
saudacao("Soto");


var olaMundo =  function(mundo){
	console.log("ola " + mundo);
};

olaMundo("Mundo");


var dizerVenha = new Function("nome", "console.log('venha aqui ' + nome);");
dizerVenha("jose");