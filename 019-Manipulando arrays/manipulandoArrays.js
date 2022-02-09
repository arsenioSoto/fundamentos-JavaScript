
var a = "Arsenio Jose Soto Junior".split(' ');
console.log(a);

console.log(a.toString());

console.log(a.join(' | '));


a.push("Crimilde");
console.log(a);

a.unshift("Sword");
console.log(a);


var elemento = a.shift();
console.log(elemento);
console.log(a);

a[3] = "Jr";
console.log(a);

var slice = a.slice(3,4);
console.log(slice);

var splice = a.splice(1,1, "Antonio", "Alexandre");
console.log(splice);
console.log(a);

a = a.concat(splice, slice);
console.log(a);




