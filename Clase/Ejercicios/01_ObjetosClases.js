//1. Definir y crear un objeto simple utilizando un literal.
let persona1 = {
    nombre: "Ada",
    apellido: "Lovelace",
    ano: 1815
};

//2. Definir y crear un objeto simple utilizando el constructor --NO RECOMENDADO
let persona2 = new Object();
persona2.nombre = "Charles";
persona2.apellido = "Babbage";
persona2.ano = 1791;

//3. Definir un constructor de un objeto, y crear objetos del tipo construido --EN DESUSO
function Persona(nom, ape, an) {
    this.nombre = nom;
    this.apellido = ape;
    this.ano = an;
}
let ada = new Persona("Ada", "Lovelace", 1815);
let babbage = new Persona("Charles", "Babbage", 1791);

//4. Clases ES6
/*
Las clases son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript.
- Ofrecen una sintaxis más simple para crear objetos.
- No utiliza la palabra function, sino la palabra class.
- Las propiedades se asignan en un método constructor(), no en la clase en sí.
*/

class Telefono {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}
let miTelefono = new Telefono("Google", "Pixel");
console.log(miTelefono.marca + " " + miTelefono.modelo);