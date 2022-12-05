

/* Mi idea general es hacer un marketplace de arte digital tipo NFT, por ahora sin contratos inteligentes. en el HTML utilice un formulario comun solo para esta entrega*/


/* creo una funcion para saludar al usuario */

function saludar_usuario(){

    let nombre_usuario = prompt("Ingresa tu nombre o alias");
    console.log("Bienvenido a nuestro marketplace de NFTs ", nombre_usuario);
}

/* creo una funcion para calcular el precio del NFT mas el gas del contrato */

function calcular_precio(){

    if( nft == 1 ){
        let precio = (150 + gas);
        return precio
    }
    else if( nft == 2 ){
        let precio = (100 + gas);
        return precio
    }
    else if( nft == 3 ){
        let precio = (50 + gas);
        return precio
    }
    else if( nft == 4 ){
        let precio = (25 + gas);
        return precio
    }
}

/* declaro el precio del gas que puede variar segun el mercado */

let gas = 12;

/* Declaro Bienvenida para que el bucle funcione y no sea infinito */

let bienvenida = prompt("Bienvenido para continuar ingresa: aceptar, Para salir ingresa: salir");

/* Declaro nft en blanco */

let nft;

/* comienzo del bucle */

while ( bienvenida != "salir"){

    if ( bienvenida == "aceptar" ){

        saludar_usuario();

        nft = prompt("Ingresa el numero del NFT que deseas mintear: 1-Legendario, 2-Epico, 3-Raro, 4-Comun");

        if ( nft == 1 || nft == 2 || nft == 3 || nft == 4 ){
            let cantidad = parseInt(prompt("Ingresa la cantidad de NFTs que deseas mintear, el maximo son 10."));
            if (cantidad <= 10){
                let precio_final = ( calcular_precio() * cantidad );
                console.log("El precio total a pagar por tus NFTs es: ", precio_final);
                console.log( "Gracias por tu visita");
                alert ("Gracias por tu compra");
            }
            else{
                alert ("cantidad no permitida");
                console.log( "Gracias por tu visita");
            }
        }
        else{
            alert ("NFT no encontrado");
            console.log( "Gracias por tu visita");
        }

    }
    else{
            console.log( "Error ingrese aceptar o salir.");
    }

/* Reinicio */
        bienvenida = prompt("Bienvenido para continuar ingresa: aceptar, Para salir ingresa: salir");
}