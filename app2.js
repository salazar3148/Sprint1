cantidad = 46000

billetes20 = 2;
billetes5 = 1;
suma = 0;

if(cantidad > 20000){
    billetesUsados = Math.trunc(cantidad / 20000);
    billetes20 -= billetesUsados;
    cantidad -= billetesUsados * 20000;
    suma += billetesUsados * 20000;
}
if(cantidad > 5000){
    billetesUsados = Math.trunc(cantidad / 5000);
    billetes5 -= billetesUsados;
    cantidad -= billetesUsados * 5000;
    suma += billetesUsados * 5000;
}
console.log(suma);
