var x = 0;
var y = 0;

//while - enquanto
while(x <= 10){
	console.log("contandoX " + x);
	x = x + 1;
}

//do while -  faca enquanto

do{
	console.log("contandoY " + y);
	y = y + 1;
}
while(y < 10){

}

for (var i = 0; i < 10; i++) {
	console.log("for: " + i);
}

var obj ={
	nome: 'Arsenio',
	sobreNome: 'Soto',
	idade: 22
};

for (var prop in obj){
	//console.log(prop);	imprimindo propriedades de um objecto
	console.log(obj[prop]);
}

