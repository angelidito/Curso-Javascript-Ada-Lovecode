/*
Crea una clase denominada Vehículo que tenga algunas características como el color, marca, modelo y 
la velocidad máxima que puede alcanzar.
También deberá tener al menos tres métodos además del constructor: comenzar que mostrará el mensaje 
“Encender motor”, parar que mostrará “Apagar motor” y distanciaMax que recibirá un parámetro con 
indicando el tiempo de funcionamiento y calculará la distancia máxima que puede haber recorrido, 
que será el resultado de multiplicar la velocidad máxima por el tiempo.
Crea dos clases más, ambas deben heredar de Vehículo:
• Coche: cuya velocidad máxima será 120 y sobrescribirá el método parar para que muestre “Aparcar”.
• Avión: cuya velocidad máxima será 1000 y sobrescribirá los métodos comenzar, para que muestre “Despegar”, y parar, para que muestre “Aterrizar”.
Crea las sentencias necesarias para crear objetos y utilizar todos los métodos definidos.
*/

//Denifimos la clase Vehículo
class Vehiculo {
    constructor(marca, modelo, color, velocidadMax) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidadMax = velocidadMax;
    }
    comenzar() {
        console.log("Encender motor");
    }
    parar() {
        console.log("Apagar motor");
    }
    distanciaMax(tiempo) {
        console.log(this.velocidadMax * tiempo);
    }
    mostrar() {
        console.log(this.marca + " " + this.modelo + " " + this.color);
    }
}

//Definimos la clase Coche que hereda de Vehículo
class Coche extends Vehiculo {
    constructor(marca, modelo, color) {
        super(marca, modelo, color, 120);
    }
    parar() {
        console.log("Aparcar");
    }
}

//Definimos la clase Avión que hereda de Vehículo
class Avion extends Vehiculo {
    constructor(marca, modelo, color) {
        super(marca, modelo, color, 1000);
    }
    comenzar() {
        console.log("Despegar"); 
    }
    parar() {
        console.log("Aterrizar");
    }
}

//Creamos un objeto de cada tipo y accedemos a los métodos de las clases
var a = new Avion("Boeing", "747", "blanco");
var c = new Coche("Ford", "Fiesta", "azul");
var v = new Vehiculo("n/d", "n/d", "n/d", 60);

console.log("AVIÓN");
a.mostrar();
a.comenzar(); //"Despegar"
a.distanciaMax(2); //2000
a.parar(); //"Aterrizar"

console.log("COCHE");
c.mostrar();
c.comenzar(); //"Encender motor"
c.distanciaMax(3); //360
c.parar(); //"Aparcar"

console.log("VEHÍCULO");
v.mostrar();
v.comenzar(); //"Encender motor"
v.distanciaMax(5); //300
v.parar(); //"Apagar motor"

