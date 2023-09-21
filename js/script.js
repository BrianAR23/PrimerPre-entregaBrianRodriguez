let pinUser = "brian123";
let codeUser = "ariel456";

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

    let opcion = prompt("Simulador de plazo fijo. elija la opción que desee. \n1 - Plazo fijo en dolares. \n2 - Plazo fijo en pesos. \nPresione la tecla E. ");

    while (opcion != "e" && opcion != "E") {
        switch (opcion) {
            case "1":
                let ingresoUsd = parseInt(prompt("Ingrese saldo en dolares a invertir"));
                let plazoUsd = parseInt(prompt("Ingrese cantidad de dias."))
                if (Number.isNaN(ingresoUsd && plazoUsd)) {
                    alert('El valor ingresado no es un número');
                } else {
                    let tna = parseFloat(0.0013 * plazoUsd)
                    let interesUsd= parseFloat(ingresoUsd * tna / 100)
                    let totalUsd= parseFloat(ingresoUsd + interesUsd)
                    alert("Interes: $" + interesUsd);
                    alert("Total: $" + totalUsd);
                break;
                }
                
            case "2":
                let ingresoPes = parseInt(prompt("Ingrese saldo en pesos a invertir"));
                let plazoPes = parseInt(prompt("Ingrese cantidad de dias."))
                if (Number.isNaN(ingresoPes && plazoPes)) {
                    alert('El valor ingresado no es un número');
                } else {
                    let tnaPes = parseFloat(0.32 * plazoPes)
                    let interes = parseFloat(ingresoPes * tnaPes / 100)
                    let total = parseFloat(ingresoPes + interes)
                    alert("Interes: $" + interes);
                    alert("Total: $" + total);
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


