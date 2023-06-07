//1. El número mayor de la lista de números recibidos.

//en esta funcion le vamos a pasar como parametros.
function numeroMayor(numeros){
   const numeros = [1,2,3,4,5,6,7,8,9,10];
   const mayor = Math.max(...numeros);
console.log(mayor);
}

module.exports = {
    numeroMayor: numeroMayor
}
