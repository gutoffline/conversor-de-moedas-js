let valorEmDolarTexto = prompt("Qual o valor em dólar que você quer converter?");
console.log( typeof valorEmDolarTexto);
// string = texto

let valorEmDolarNumero = parseFloat(valorEmDolarTexto);
console.log(typeof valorEmDolarNumero);
// float = número decimal -> 12.99
// int = número inteiro -> 12

alert(valorEmDolarNumero);

let valorEmReal = valorEmDolarNumero * 5.77;

let valorEmRealFixado = valorEmReal.toFixed(2);

alert(valorEmRealFixado);