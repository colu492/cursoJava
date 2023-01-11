
/* En esta entrega agregue lo que es la estructura final del html con sus estilos correspondientes, me queda pendiente hacer que la funcion comprar ande*/


/*  Funcion para saludar al usuario */


let btn_saludar = document.getElementById("btn_saludar");

btn_saludar.addEventListener("click" , saludar);

function saludar(){

    let nombre = document.getElementById("nombre").value;

    let saludo = document.createElement("p")
    saludo.innerHTML = `<h5> Bienvenido: ${nombre} </h5>`

    let contenedor_saludo = document.getElementById("contenedor_saludo");
    contenedor_saludo.append(saludo);

}


/*  Funcion para agregar al carrito */

let carrito = [];

function add_carrito(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
    let nft_rareza = padre.querySelector("h5").textContent;
    let nft_precio = padre.querySelector("p").textContent;
    let nft_img = abuelo.querySelector("img").src;
    let nft = {
        rareza: nft_rareza,
        precio: nft_precio,
        img: nft_img,
    };


    carrito.push(nft);

    let carrito_JSON = JSON.stringify(carrito);

    localStorage.setItem("carrito_de_compras" , carrito_JSON);

    let recuperar_carrito = localStorage.getItem("carrito_de_compras");
    
    console.log(recuperar_carrito);

    recuperar_carrito = JSON.parse(recuperar_carrito);

    imp_carrito( nft );

}

/*  imprimir carrito y eliminar del carrito */

let btn_agregar = document.querySelectorAll(".btn_agregar");

for( let boton of btn_agregar){

    boton.addEventListener("click" , add_carrito);
}   

function imp_carrito ( nft ){

    let fila = document.createElement("tr");
    fila.innerHTML = `<td><img src="${nft.img}"></td>
                    <td>${nft.rareza}</td>
                    <td>${nft.precio}</td>
                    <td><button class="btn boton quitar">Quitar</button></td>`
    
    let tabla = document.getElementById("tbody");
    tabla.append( fila );

    let btn_quitar = document.querySelectorAll(".quitar");

    for ( let boton of btn_quitar){

        boton.addEventListener("click" , quitar_nft);
    }

    function quitar_nft(e){

        let abuelo = e.target.parentNode.parentNode;
        abuelo.remove();
    }
}

/*  Funcion para ocultar y mostrar el carrito */

let btn_carrito = document.getElementById("btn_carrito");

btn_carrito.addEventListener("click" , mostrar_carrito);

function mostrar_carrito(){

    let get_carrito = document.getElementById("carrito");

    if (get_carrito.style.display != "none"){

        get_carrito.style.display = "none";
    }
    else{
        get_carrito.style.display = "block";

    }

}




let btn_comprar = document.getElementById("btn_comprar");
btn_comprar.addEventListener("click" , calcular_precio);

function calcular_precio(){

    
}
