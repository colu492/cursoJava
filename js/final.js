let nft_card = document.getElementById("nft_card");
let btn_carrito = document.getElementById("btn_carrito");
let contenedor_carrito = document.getElementById("carrito");
let btn_saludar = document.getElementById("btn_saludar");
let cantidad_nfts = document.getElementById("cantidad_nfts");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let btn_comprar = document.getElementById("btn_comprar");

btn_saludar.addEventListener("click" , saludar);

function saludar(){

    let nombre = document.getElementById("nombre").value;
    let saludo = document.createElement("p")
    saludo.innerHTML = `<h5> Bienvenido: ${nombre} </h5>`;

    let contenedor_saludo = document.getElementById("contenedor_saludo");
    contenedor_saludo.append(saludo);

    Swal.fire({
        icon: "success",
        text:"Bienvenido a Gollo Adventures",
        imageUrl: 'https://woonklylabs.mo.cloudinary.net/images/Y7RXztK_3h5zlqjkRrFp1.gif?tx=c_thumb,g_face,w_150,h_150'
    })

    btn_saludar.style.display = "none";

}

nfts.forEach(nft => {
    let contenedor = document.createElement("div");
    contenedor.className = "contenedor_rarezas";
    contenedor.innerHTML = `
        <div class="card">
            <img src="${nft.img}" class="card_img" alt="NFT Legendario">
            <div class="card-body">
            <h5 class="card-title">${nft.rareza}</h5>
            <p class="precio">${nft.precio} ETH</p>
            </div>
        </div>
    `;
    
    nft_card.append(contenedor);

    let agregar = document.createElement("button");
    agregar.innerText = "agregar";
    agregar.className = "boton btn_agregar";

    contenedor.append(agregar);

    

    agregar.addEventListener("click", () => {

        let cant_nft = carrito.some((repeat_nft) => repeat_nft.id === nft.id);
    if (cant_nft === true){
        carrito.map((nfts) =>{
            if(nfts.id === nft.id){
                nfts.cantidad++;
            }
        });
    }
    else{
        carrito.push({
            id: nft.id,
            rareza: nft.rareza,
            precio: nft.precio,
            img: nft.img,
            cantidad: nft.cantidad,
        });
    }
    cont_carrito();
    storage();
    });
});
function storage(){
localStorage.setItem("carrito", JSON.stringify(carrito));
};

btn_comprar.addEventListener("click", ()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu compra fue realizada con exito',
        showConfirmButton: false,
        timer: 1500
    });
    localStorage.clear();

});


