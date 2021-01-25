document.addEventListener('DOMContentLoaded', () => {


    //Eventos de botones
    document.getElementById('roja').addEventListener('click', roja);
    document.getElementById('verde').addEventListener('click', verde);
    document.getElementById('azul').addEventListener('click', azul);
    document.getElementById('borrar').addEventListener('click', borrar);

    // Eventos de imagenes:
    for (let i = 0; i < document.getElementsByTagName('img').length; i++) {
        const img = document.getElementsByTagName('img')[i];
        img.addEventListener('mouseover', infoParada);
        img.addEventListener('mouseleave', borrarInfo)
    }
});


// • Cuando el ratón pase por encima de cualquiera de las imágenes de las paradas del metro de Berlín, debes mostrar en el párrafo correspondiente, información de esa parada, por ejemplo: Esta es la parada de Westhafen.
function infoParada(e) {
    console.log('infoParada');
    let img = e.target;
    let pInfo = document.getElementById('info').getElementsByTagName('p')[0];

    pInfo.innerHTML = 'Esta es la parada ' + img.alt;
}
// Deja de mostrar la infomación cuando el raton ya no está encima.
function borrarInfo() {
    let pInfo = document.getElementById('info').getElementsByTagName('p')[0].innerHTML = '&nbsp;';
}

// • Cuando se haga clic en los botones Línea roja, Línea verde, Línea azul; las paradas por las que pasa cualquiera de esas líneas, se tienen que resaltar con el color correspondiente (fíjate en las clases CSS que ya tienes creadas y asociadas).
function roja() {
    for (let i = 0; i < document.getElementsByTagName('img').length; i++) {
        const img = document.getElementsByTagName('img')[i];

        // Pequeño control por si ya tiene un color
        let clase = img.getAttribute('class').split(' borde')[0];
        // Coprobamos si hay que pintarla del color
        if (clase.includes('roja')) {
            //La pintamos
            clase += ' borderoja';
            img.setAttribute('class', clase);
        }
    }
}

function verde() {
    for (let i = 0; i < document.getElementsByTagName('img').length; i++) {
        const img = document.getElementsByTagName('img')[i];

        // Pequeño control por si ya tiene un color
        let clase = img.getAttribute('class').split(' borde')[0];
        // Coprobamos si hay que pintarla del color
        if (clase.includes('verde')) {
            //La pintamos
            clase += ' bordeverde';
            img.setAttribute('class', clase);
        }
    }
}

function azul() {
    for (let i = 0; i < document.getElementsByTagName('img').length; i++) {
        const img = document.getElementsByTagName('img')[i];

        // Pequeño control por si ya tiene un color
        let clase = img.getAttribute('class').split(' borde')[0];
        // Coprobamos si hay que pintarla del color
        if (clase.includes('azul')) {
            //La pintamos
            clase += ' bordeazul';
            img.setAttribute('class', clase);
        }
    }
}
// • Cuando se haga clic en el botón Borrar selección, las paradas se deben dejar de resaltar en los colores de cualquiera de las líneas de metro.
function borrar() {
    for (let i = 0; i < document.getElementsByTagName('img').length; i++) {
        const img = document.getElementsByTagName('img')[i];
        // Pequeño control por si ya tiene un color
        let clase = img.getAttribute('class').split(' borde')[0];
        //La despintamos
        img.setAttribute('class', clase);
    }

}