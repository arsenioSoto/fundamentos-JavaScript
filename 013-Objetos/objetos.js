/*
var obj = {
	nome: "Arsenio",
	sexo: "M",
	apelido: "Soto",
	idade: 20
};
// Apresentar propriedades do objeto
console.log(obj);


console.log(obj.apelido);
*/

var obj = {
	nome: "Junior",
	sobreNome: "Jose",
	idade: 20,

	//apresentacao: function(){
	//	console.log("Oy, eu sou " + this.nome + ' ' + this.sobreNome + " e tenho " + this.idade + " de idade");
	//}

	apresentacao: mostrar
};

//obj.apresentacao();

function mostrar(){
	console.log("Oy, eu sou " + this.nome + ' ' + this.sobreNome + " e tenho " + this.idade + " de idade");
}

obj.apresentacao();

