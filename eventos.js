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

    localStorage.setItem("carrito" , carrito_JSON);

    let recuperar_carrito = localStorage.getItem("carrito");
    
    console.log(recuperar_carrito);

    recuperar_carrito = JSON.parse(recuperar_carrito);

}

let btn_agregar = document.querySelectorAll(".btn_agregar");

for( let boton of btn_agregar){

    boton.addEventListener("click" , add_carrito);
}   



let btn_carrito = document.getElementById("btn_carrito");
let contenedor_carrito = document.getElementById("carrito");

btn_carrito.addEventListener("click" , () => {

    let carrito = localStorage.getItem("carrito");
    carrito = JSON.parse(carrito);


    let items_carrito = document.createElement("div");
    items_carrito.className = "elementos_carrito";
    items_carrito.innerHTML = `<h2 class="carrito_titulo">Carrito</h2>
                                    <button id="btn_cerrar" class="btn btn-primary boton">Cerrar</button>
    `;
    contenedor_carrito.append(items_carrito);


    carrito.forEach((nft) => {
        let contenedor_items = document.createElement("div");
        contenedor_items.className = "contenedor_items";
        contenedor_items.innerHTML = `<img src="${nft.img}">
        <h3>${nft.rareza}</h3>
        <p>${nft.precio} ETH</p>
        <button class="btn boton quitar">Quitar</button>
        `;
        items_carrito.append(contenedor_items);

        })

        let btn_quitar = document.querySelectorAll(".quitar");

    for ( let boton of btn_quitar){

        boton.addEventListener("click" , quitar_nft);
    }

    function quitar_nft(e){

        let padre = e.target.parentNode;
        padre.remove();
    }
    let btn_cerrar = document.getElementById("btn_cerrar");

    btn_cerrar.addEventListener("click" , () =>{

            items_carrito.style.display = "none";

    })


});



let btn_comprar = document.getElementById("btn_comprar");
btn_comprar.addEventListener("click" , calcular_precio);

function calcular_precio(){

    
}
