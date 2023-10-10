let pinUser = "brian123";
let codeUser = "ariel456";

//FUNCION DE LOGEO.
function acceso() {
    let ingresar = false;
    let intentos = 3;
    for (let i = intentos; i > 0; i--){

        let nombreUser = prompt("Ingresar nombre de usuario");
        let passUser = prompt("Ingresar contraseña");

        if ((nombreUser === pinUser) && (passUser === codeUser)){
            alert("Bienvenido " + nombreUser);
            ingresar = true;
            break;
        } else if ((nombreUser != pinUser) && (passUser == codeUser)){
            alert("Usuario ingresado incorrecto. Te quedan " + (i -1) + " intentos.");
        } else if ((nombreUser == pinUser) && (passUser != codeUser)){
            alert("Codigo de acceso incorrecto. Te quedan " + (i - 1) + " intentos.");
        } else if ((nombreUser != pinUser) && (passUser != codeUser)) {
            alert("Usuario y codigo de acceso incorrectos. Te quedan " + (i - 1) + " intentos.");
        }

    }

    return ingresar;
}

if (acceso()) {

//ARRAY CON OBJETOS DE PLAZOS FIJOS.
    const plazos = [
        {
            id: 0,
            moneda: "En Dolares",
            tna: "0,50%",
            tea: "0,50%"
        },
        {
            id: 1,
            moneda: "En Pesos",
            tna: "188%",
            tea: "205,84%"
        }
    ];
    
//FUNCION PARA MOSTRAR TIPOS DE PLAZOS FIJOS.
    const mostrarPlazos = () => {
        let mensaje = "Tipos de Plazos Fijos:\n";

//METODO DE ARRAY.
        plazos.forEach((plazo) => {
            mensaje += `\nPlazo: ${plazo.moneda}\n TNA: ${plazo.tna} \n TEA: ${plazo.tea} \n-----------------------\n`;
        });
    
        alert(mensaje)
    }

    mostrarPlazos();

//OPCIONES PARA LA ELECCION DEL USUARIO.
    let opcion = prompt("Simulador de plazo fijo. elija la opción que desee. \n1 - Plazo fijo en dolares. \n2 - Plazo fijo en pesos. \nPresione la tecla E. ");

    while (opcion != "e" && opcion != "E") {
        switch (opcion) {
            case "1":
                let ingresoUsd = parseInt(prompt("Ingrese saldo en dolares a invertir"));
                let plazoUsd = parseInt(prompt("Ingrese cantidad de dias."))
                if (Number.isNaN(ingresoUsd && plazoUsd)) {
                    alert('El valor ingresado no es un número');
                } else {
                    let tna = Math.abs((0.0013 * plazoUsd))
                    let interesUsd= Math.abs((ingresoUsd * tna / 100))
                    let totalUsd= Math.abs((ingresoUsd + interesUsd))
                    alert("Interes: $" + interesUsd + "\nTotal: $" + totalUsd);
                break;
                }
                
            case "2":
                let ingresoPes = parseInt(prompt("Ingrese saldo en pesos a invertir"));
                let plazoPes = parseInt(prompt("Ingrese cantidad de dias."))
                if (Number.isNaN(ingresoPes && plazoPes)) {
                    alert('El valor ingresado no es un número');
                } else {
                    let tnaPes = Math.abs((0.32 * plazoPes))
                    let interes = Math.abs((ingresoPes * tnaPes / 100))
                    let total = Math.abs((ingresoPes + interes))
                    alert("Interes: $" + interes + "\nTotal: $" + total);
                break;
                }
            
            default:
                alert("Elegiste una opción incorrecta.")
                break;
        }
        opcion = prompt("Simulador de plazo fijo. elija la opción que desee. \n1 - Plazo fijo en dolares. \n2 - Plazo fijo en pesos. \nPresione la tecla E. ");
    }
} else {
    alert("Usted excedió el limite de intentos. Usuario bloqueado.")
}

alert("Adiós! que tenga buen dia.");


