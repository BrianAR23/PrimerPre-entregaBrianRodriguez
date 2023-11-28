export const dolarArray = [{
    dolar: "Blue",
    compra: 960,
    venta: 980,
},
{
    dolar: "Oficial",
    compra: 348.96,
    venta: 368.60,
},
{
    dolar: "Blosa",
    compra: 894.13,
    venta: 894.13,
},
{
    dolar: "Cripto",
    compra: 910,
    venta: 926,
},
];

//FUNCION PARA MOSTRAR TIPOS DE DOLAR
export const mostrarDolar = () => {

    let mensaje = "Tipos de Dolar\n";

    dolarArray.forEach((dolar) => {
        mensaje += `Dolar: ${dolar.dolar} \n Compra: ${dolar.compra} \n Venta: ${dolar.venta} \n---------------------\n`;
    });

/*     alert(mensaje); */
    return mensaje;
}

