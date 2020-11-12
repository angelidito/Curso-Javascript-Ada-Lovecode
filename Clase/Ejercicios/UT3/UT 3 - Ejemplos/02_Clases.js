//CLASES ES6
/*
Las clases son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript.
- Ofrecen una sintaxis más simple para crear objetos.
- No utiliza la palabra function, sino la palabra class.
- Las propiedades se asignan en un método constructor(), no en la clase en sí.
*/
//Clase con atributos o propiedades
class Telefono {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}
let miTelefono = new Telefono("Google", "Pixel");
console.log("Definción de clases ES6 (MÉTODO RECOMENDADO)");
console.log("Objeto teléfono: " + miTelefono.marca + " " + miTelefono.modelo);

//Clase con atributos o propiedades y métodos
class Persona {
    constructor(nombre, apellido, nacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimiento = nacimiento;
    }
    nombreCompleto() {
	  return this.nombre + " " +  this.apellido;
    }
}

let persona = new Persona("Ada", "Lovelace", 1815);
console.log("Objeto persona con un método: " + persona.nombreCompleto());



//CLASE A PARTIR DE PROTOTIPOS ES5
function Persona2(nom, ape, an) {
    this.nombre = nom;
    this.apellido = ape;
    this.ano = an;
}

let ada = new Persona2("Ada", "Lovelace", 1815);
let babbage = new Persona2("Charles", "Babbage", 1791);
console.log("Constructor de objeto (método clásico EN DESUSO)");
console.log("Objeto ada: " + ada.nombre + " " + ada.apellido);
console.log("Objeto babbage: " + babbage.nombre + " " + babbage.apellido);


//OBSERVACIONES
/* Tanto si utilizamos la sintaxis de clase como la de prototipo, las clases
JavaScript son funciones y sus instancias, objetos: */
console.log("typeof Persona: " + typeof Persona); // "function"
console.log("typeof Persona2: " + typeof Persona2); // "function"
console.log("typeof persona: " + typeof persona); // "object"
// Si queremos comprobar si un objeto es instancia de una clase, utilizamos instanceof 
console.log("persona instanceof Persona: " + (persona instanceof Persona)); // true

