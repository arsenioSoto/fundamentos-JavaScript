function Pessoa(nome, idade, nacionalidade){

	this.nome = nome;
	this.idade =  idade;
	this.nacionalidade = nacionalidade;

	this.apresentacao = function(){
		console.log("Oy, eu sou " + this.nome + " tenho " + this.idade +
			" idade " + " de nacionalidade " + this.nacionalidade);

	}
}


//var  junior = new Pessoa("Junior", 45, "Moz");
//junior.saudacao = function(){console.log("Ola");};
//
//Pessoa.prototype.saudacao = function(){console.log("Ola");};
//junior.saudacao();


//var crimilde = new Pessoa("Crimilde", 76, "Moz");
//crimilde.saudacao();

//var arsenio = new Pessoa("Arsenio", 23, "Angola");
//arsenio.saudacao();

//console.log(junior);
//console.log(crimilde);

//junior.apresentacao();
//crimilde.apresentacao();

"sword".charAt();
"junior".indexOf();

String.prototype.apagar = function(){
	return "";
}

console.log("Ola".apagar());