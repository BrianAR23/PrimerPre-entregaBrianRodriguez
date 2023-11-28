


import { dolarArray, mostrarDolar } from "./data.js";


/* console.log(dolarArray) */


Toastify({
    text: "Bienvenido a Divicom",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
}).showToast();


const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');


// Función para obtener el tipo de moneda y la cantidad desde el localStorage

function getStoredData() {
    const storedMonedaOne = localStorage.getItem('moneda_one');
    const storedMonedaTwo = localStorage.getItem('moneda_two');
    const storedCantidadOne = localStorage.getItem('cantidad_one');

    
}

// Fetch Exchange rate y DOM
function calculate(){
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
    .then(res => res.json() )
    .then(data => {
        const taza = data.rates[moneda_two];
        
        cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

       cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);
    
    } );
    
// Almacena los valores seleccionados en localStorage
localStorage.setItem('moneda_one', moneda_one);
localStorage.setItem('moneda_two', moneda_two);
localStorage.setItem('cantidad_one', cantidadEl_one.value);
}



//Event listeners
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    calculate();
} );

function poblarModal () {
    /* let textoModal = mostrarDolar() */
    let modalBody = document.querySelector('.modal-body-divisa');
    /* console.log(modalBody) */
    /* modalBody.textContent = textoModal; */
    dolarArray.forEach((dolar) => {
        let pElement = document.createElement("div");
        pElement.textContent = `Dolar: ${dolar.dolar} \n Compra: ${dolar.compra} \n Venta: ${dolar.venta}`;
        modalBody.append(pElement)
    });
}

calculate();

// Cargar datos almacenados al cargar la página
getStoredData();

poblarModal();
