/*
Crea una clase Disco que almacene la siguiente información: 
• Nombre del disco. 
• Grupo de música o cantante. 
• Año de publicación. 
• Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”); 
• Localización: almacenará un número de estantería. 
• Prestado: almacenará un valor booleano. Por defecto será false.
Además, tendrá los siguientes métodos: 
• Un constructor que se puede llamar con o sin parámetros: 
   o Sin parámetros: las 4 primeras propiedades serán cadenas vacías, la localización será 0 por 
     defecto y prestado estará a false. 
   o Con parámetros: se pasarán solo las cinco primeras propiedades; la propiedad prestado será false. 
• Un método que permitirá cambiar el número de estantería en la localización. 
• Un método que permitirá cambiar la propiedad prestado. 
• Un método que muestre toda la información de un disco. 
El programa hará lo siguiente: 
• Creará un objeto de tipo disco, para lo cual te pide los parámetros. 
• Presente un menú que permita: 
   o Mostrar la información del disco que se ha añadido 
   o Cambiar el disco de estantería 
   o Prestar un disco o Devolver un disco 
   o Terminar
*/

//Definimos la clase disco
class Disco {
    constructor(nombre = "", grupo = "", publicacion = "", tipo = "", local = 0, prestado = false) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.publicacion = publicacion;
        this.tipo = tipo;
        this.local = local;
        this.prestado = prestado;
    }
    cambiarLocal(local) {
        this.local = local;
    }
    cambiarPrestado(prestado) {
        this.local = 0;
        this.prestado = prestado;
    }
    mostrarInfo() {
        return `Disco: ${this.nombre} del grupo ${this.grupo} publicado en ${this.publicacion} se encuentra ${(this.prestado) ? "prestado" :  "en la estantería " + this.local}.`;
    }
}

// //Pruebas por consola
let disco = new Disco("Ninguna Ola", "La M.O.D.A.", "2020", "indie", 5);
console.log(disco.mostrarInfo());
disco.cambiarLocal(7);
console.log(disco.mostrarInfo());
disco.cambiarPrestado(true);
console.log(disco.mostrarInfo());
let discoVacio = new Disco();
console.log(discoVacio.mostrarInfo());

// /***** Interacción con el usuario *****/
// //Creación del disco
// let disco = null;
// if (disco === null) {
//     alert("Vamos a introducir un nuevo disco.");
//     let nombre = prompt("Nombre del disco: ");
//     let grupo = prompt("Grupo: ");
//     let publicacion = prompt("Fecha de publicación: ");
//     let tipo = prompt("Tipo de música: ");
//     disco = new Disco(nombre, grupo, publicacion, tipo);
// }

// //Menú
// let opcion = "";
// while (opcion !== "1" && opcion !== "2" && opcion !== "3" && opcion !== "4" && opcion !== "5") {
//     opcion = prompt("Elige una opción:\n1. Mostrar información del disco.\n2. Cambiar el disco de estantería.\n3. Prestar un disco.\n4. Devolver un disco. \n5. Terminar.");
// }

// let resultado = "";
// switch (opcion) {
//     case "1":
//         resultado += "<br>1. Mostrar información del disco.";
//         resultado += "<br>" + disco.mostrarInfo();
//         break;
//     case "2":
//         resultado += "<br>2. Cambiar el disco de estantería."
//         disco.cambiarPrestado(false);
//         let estanteria = prompt("Elige le número de estantería (1..12): ");
//         disco.cambiarLocal(parseInt(estanteria));
//         resultado += "<br>El disco se ha cambiado de estantería."
//         resultado += "<br>" + disco.mostrarInfo();
//         break;
//     case "3":
//         resultado += "<br>3. Prestar un disco."
//         disco.cambiarPrestado(true);
//         resultado += "<br>El disco ha sido prestado.";
//         resultado += "<br>" + disco.mostrarInfo();
//         break;
//     case "4":
//         resultado += "<br>4. Devolver un disco."
//         disco.cambiarPrestado(false);
//         resultado += "<br>El disco ha sido devuelto.";
//         resultado += "<br>" + disco.mostrarInfo();
//         break;
//     case "5":
//         resultado += "<br>5. Terminar."
//         break;
//     default:
//         resultado += "<br>No es una opción válida."
//         break;
// }
// document.getElementById("resultado").innerHTML += resultado;