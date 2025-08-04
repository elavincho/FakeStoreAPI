
const listaProductos = document.querySelector("#listaProductos");

const url = 'https://fakestoreapi.com/products/';

async function obtenerDatos() {

    for (let i = 1; i <= 20; i++) {
        await fetch(url + i)
            .then((response) => response.json())
            // .then(data => console.log(data))
            .then(data => mostrarProductos(data))
            .catch(() => {
                if (i < 1) {
                    console.log("No se pudo obtener datos de la api");
                }
            })
            .finally(
                console.log("Finally de la api")
            );

    }

}

obtenerDatos();

function mostrarProductos(data) {

    const div = document.createElement("div");
    div.classList.add("productos");
    div.innerHTML = `

    <div class="d-flex position-relative cont-enl-estirado">
                <img src="${data.image}" class="flex-shrink-0 me-3 img-enl-estirado" alt="img">
                <div>
                    <h2 class="mt-0">${data.category}</h2>
                    <h4>${data.title}</h4>
                    <h2 class="mt-0">$ ${data.price}</h2>
                    <a href="blusas.html" class="stretched-link"></a>
                </div>
            </div>
    
                `;
    listaProductos.append(div);
}