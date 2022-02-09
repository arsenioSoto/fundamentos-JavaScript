//function test(){
//	var x = 20;
//	console.log(x);
//}

//test();

//var b = 20;
//function test1(){
//	console.log(b);
//}

//test1();

var incremento = (function(){
	var contar = 0;

	return function(){
		contar = contar + 1;
		console.log(contar);
	}
})();

incremento();
incremento();
incremento();
incremento();



