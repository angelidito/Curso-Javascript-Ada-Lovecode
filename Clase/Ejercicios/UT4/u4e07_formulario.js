// Deberás tener en cuenta, además:
//     • Se utilizará el evento “DOMContentLoaded"
document.addEventListener("DOMContentLoaded", () => {

    let v = document.getElementById("validar");


    //     • La validación se asignará al formulario mediante el método .addEventListener().
    v.addEventListener("click", () => {

        let nombreDisco = document.getElementsByName("nombreDisco")[0];
        let grupo = document.getElementsByName("grupo")[0];
        let año = document.getElementsByName("año")[0];
        let genero = document.getElementsByName("género")[0];
        let localizacion = document.getElementsByName("localización")[0];
        let prestado = document.getElementsByName("prestado")[0];

        // Validamos
        let errores = 0;
        errores += campo20(nombreDisco) ? 0 : 1;
        errores += campo20(grupo) ? 0 : 1;
        errores += num4(año) ? 0 : 1;
        errores += sinComprobacion(genero) ? 0 : 1;
        errores += voidOrNum(localizacion) ? 0 : 1;
        errores += sinComprobacion(prestado) ? 0 : 1;

        // Enviamos si OK
        if (errores == 0 && confirm("¿Desea enviar ya el formulario?"))
            document.getElementsByTagName("form")[0].submit();




        let e = document.getElementById("nombreDisco");

    });



});
// Realiza las funciones necesarias para validarlo con JavaScript teniendo en cuenta:

//     •Nombre del disco: 20 caracteres, obligatorio.
//     •Grupo de música o cantante: 20 caracteres, obligatorio.
//     • Los campos nombre del disco y grupo de música se validarán en la misma función (campo20).
function campo20(e) {
    if (20 < e.value.length|| e.value.length < 0) {
        // e.setAttribute("valid", '');
        e.setAttribute("class", 'valid');
        return true;
    }

    e.setAttribute("class", 'invalid');
    return false;

}


//     •Año de publicación: 4 caracteres numéricos.
// Voy a suponer que 0000 tampoco es valido.....
function num4(e) {
    if (isNaN(e.value) || e.value > 9999 || e.value < 1000) {
        e.setAttribute("class", 'invalid');
        return false;
    }
    e.setAttribute("class", 'valid');
    return true;
}
//     • Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”): sin comprobación.
function sinComprobacion(e) {
    e.setAttribute("class", 'valid');
    return true;
}

//     • Localización: almacenará un número de estantería: vacío o numérico.
function voidOrNum(e) {
    if (isNaN(e.value) ){
        e.setAttribute("class", 'invalid');
        return false;
    }
    
    e.setAttribute("class", 'valid');
    return true;

}

//     • Prestado: sin comprobación.



// Ampliación:
//     • Modifica las funciones de tal manera que, en caso de que se produzca un error en la validación, se marque de alguna manera visible, atractiva y cómoda para el usuario.

//     • Para ello deberás crear las clases CSS necesarias (puedes incluirlas en el propio HTML si lo deseas) para que se visualice correctamente.

//     • Ten en cuenta que, si el usuario pone correctamente los datos, el campo deberá volver a su formato original.