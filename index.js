const arreglo = ['rojo','azul','verde'];
console.log(arreglo[0]);  // rojo
arreglo.push('amarillo');
console.log(arreglo); // [ 'rojo', 'azul', 'verde', 'amarillo' ]
arreglo.unshift('violeta');
console.log(arreglo); // [ 'violeta', 'rojo', 'azul', 'verde', 'amarillo' ]
arreglo.pop();
console.log(arreglo); // [ 'violeta', 'rojo', 'azul', 'verde' ]
arreglo.shift();
console.log(arreglo);
const otroArreglo = arreglo.map((arreglo)=>{return 'color ' + arreglo});
console.log(otroArreglo); // [ 'color rojo', 'color azul', 'color verde' ]
const arregloFiltrado = arreglo.filter((arreglo)=>{if(arreglo === 'verde'){return true}});
console.log(arregloFiltrado); // [ 'verde' ]
const arregloReversado = arreglo.reverse();
console.log(arregloReversado); // [ 'verde', 'azul', 'rojo' ]
console.log(arreglo); // [ 'verde', 'azul', 'rojo' ]
console.log(arreglo.at(1));
const arregloCortado = arreglo.slice(1);
console.log(arregloCortado);





