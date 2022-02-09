//function dizerVenha(nome){
//	console.log("Venha aqui, " + nome);
//}

//dizerVenha("Junior");


function dizerTchau(pessoa){
	console.log(this);
	console.log("Tchau " + pessoa);

}

dizerTchau.call(null, "Arsenio");


//dizerTchau.apply({}, ["Jr"]);