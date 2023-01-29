
/** construccion del carrito **/

let imprimir_carrito = () => {

    contenedor_carrito.innerHTML = "";


    let items_carrito = document.createElement("div");
    items_carrito.className = "elementos_carrito";
    items_carrito.innerHTML = `<h2 class="carrito_titulo">Carrito</h2>
    `;
    contenedor_carrito.append(items_carrito);

    let btn_cerrar = document.createElement("button");
    btn_cerrar.className = "boton btn btn_cerrar";
    btn_cerrar.innerText = "Cerrar";

    btn_cerrar.addEventListener("click", () =>{
        items_carrito.style.display = "none";
    });

    items_carrito.append(btn_cerrar);

    carrito.forEach((nft) => {
        let contenedor_items = document.createElement("div");
        contenedor_items.className = "contenedor_items";
        contenedor_items.innerHTML = `<img src="${nft.img}">
        <h3>${nft.rareza}</h3>
        <p>${nft.precio} ETH</p>
        <p>${nft.cantidad}</p>
        <button class="btn boton borrar">Quitar</button>
        `;
        items_carrito.append(contenedor_items);

        let borrar = contenedor_items.querySelector(".borrar");
        borrar.addEventListener("click", () => {
            eliminar_nft(nft.id);
        })

});

let total = carrito.reduce((acc, unidad) => acc + unidad.precio * unidad.cantidad, 0);
        let compra_total = document.createElement("div");
        compra_total.className = "compra_total"
        compra_total.innerHTML = `TOTAL: ${total} ETH`;

        items_carrito.append(compra_total);
};

btn_carrito.addEventListener("click", imprimir_carrito);

let eliminar_nft = (id) => {
    let encontrar_id = carrito.find((element) => element.id === id);
    carrito = carrito.filter((nftid) =>{
        return nftid !== encontrar_id;    
    });

    cont_carrito();
    imprimir_carrito();

};

function cont_carrito(){
    cantidad_nfts.style.display = "block";

    let acumulador = carrito.length;
    localStorage.setItem("acumulador", JSON.stringify(acumulador));
    cantidad_nfts.innerText = JSON.parse(localStorage.getItem("acumulador"));
};
cont_carrito();

