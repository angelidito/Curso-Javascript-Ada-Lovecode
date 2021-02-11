document.addEventListener("DOMContentLoaded", inicio);

function inicio() {
    document.getElementById("url").value = document.URL;
    document.getElementById("mostrar").addEventListener("click", cargar);
}

function cargar() {
    let miURL = document.getElementById("url").value;
    async function obtenerTexto(url) {
        let objeto = await fetch(url);
        let texto = await objeto.text();
        document.getElementById("contenido").innerHTML = texto;
    }
    obtenerTexto(miURL);
}