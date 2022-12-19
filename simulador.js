

/* En esta entrega agregue las rubricas requeridas a mi codigo original, si es posible me gustaria que me dijeras si mi codigo esta bien en cuanto a "buenas practicas", o crees que se puede hacer mucho mas sencillo; se que tengo varias fallas pero me gustaria saber la opinion de un tutor al respecto y saber que puedo mejorar (me imagino que si pero me da curiosidad saber mas o menos que nivel de redaccion tengo)  ---- ---> Mi idea general es hacer un marketplace de arte digital tipo NFT, por ahora sin contratos inteligentes. en el HTML utilice un formulario comun solo para esta entrega*/


/* creo una funcion para saludar al usuario */

function saludar_usuario(){

    let nombre_usuario = prompt("Ingresa tu nombre o alias");
    console.log ("Bienvenido a nuestro marketplace de NFTs ", nombre_usuario);

}
/* Clase para crear nfts(objetos) */


class Gollo_nft{

    constructor(coleccion, rareza, costo, gas){

        this.coleccion = coleccion;
        this.rareza = rareza;
        this.costo = costo;
        this.gas = gas;
    }

    identificar(){
        console.log("<----------------------------->");
        console.log ("Coleccion: ", this.coleccion);
        console.log ("Gollo: ", this.rareza);
        console.log ("Precio: ", this.costo);
        console.log( "El costo del Gas es: ", this.gas);
    }

}

/* Objetos ya en stock */

let nft_uno = new Gollo_nft("Gollo Adventures", "Legendario", 200, 22);
let nft_dos = new Gollo_nft("Gollo Adventures", "Epico", 150, 17);
let nft_tres = new Gollo_nft("Gollo Adventures", "Raro", 100, 12);
let nft_cuatro = new Gollo_nft("Gollo Adventures", "Comun", 50, 7);



/* creo una funcion para calcular el precio del NFT mas el gas por transaccion */

function calcular_precio(){

    if( nft == 1 ){
        nft_uno.identificar();
        let precio = (nft_uno.costo + nft_uno.gas);
        return precio
        
    }
    else if( nft == 2 ){
        nft_dos.identificar();
        let precio = (nft_dos.costo + nft_dos.gas);
        return precio
    }
    else if( nft == 3 ){
        nft_tres.identificar();
        let precio = (nft_tres.costo + nft_tres.gas);
        return precio
    }
    else if( nft == 4 ){
        nft_cuatro.identificar();
        let precio = (nft_cuatro.costo + nft_cuatro.gas);
        return precio
    }
}


/* Declaro Bienvenida para que el bucle funcione y no sea infinito */

let bienvenida = prompt("Bienvenido para continuar ingresa: aceptar, Para salir ingresa: salir, Para agregar ingresa: agregar");

/* Declaro nft en blanco */

let nft;

/* Declaro mi array en blanco */

let lista_nfts = []

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
    else if (bienvenida == "agregar"){

        let password = parseInt(prompt("Ingresa la contraseña: "));

        /* Para que el usuario comun no agregue cualquier cosa */

        if(password === 1234){

            for (let i = 0 ; i < 4 ; i = i + 1){

                let coleccion = prompt("Ingrese la coleccion del ntf");
                let rareza = prompt("Ingrese la rareza del ntf");
                let costo = parseInt(prompt("Ingrese el precio del ntf"));
                let gas = parseInt(prompt("Ingrese el gas del ntf"));

                let nfts = new Gollo_nft(coleccion , rareza , costo , gas);
                lista_nfts.push(nfts);

                }
                console.log( lista_nfts );
                console.log("Ingresa salir para ver los nuevo nfts");
            }
            else{
                console.log ( "Contraseña Incorrecta" )
            }
        }
    else{
            console.log( "Error ingrese aceptar o salir.");
    }
/* Reinicio */ 
        bienvenida = prompt("Bienvenido para continuar ingresa: aceptar, Para salir ingresa: salir, Para agregar ingresa: agregar");
}

/* Al salir Muestro los nuevos elementos de la lista */

for (let item of lista_nfts){

    item.identificar();
}