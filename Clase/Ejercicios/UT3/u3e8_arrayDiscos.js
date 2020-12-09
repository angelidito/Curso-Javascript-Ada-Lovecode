// Crea una clase Disco que almacene la siguiente información:
// • Nombre del disco.
// • Grupo de música o cantante.
// • Año de publicación.
// • Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”);
// • Localización: almacenará un número de estantería.
// • Prestado: almacenará un valor booleano. Por defecto será false.
class Disco {
    // Además, tendrá los siguientes métodos:
    // • Un constructor que se puede llamar con o sin parámetros:
    //     o Sin parámetros: las 4 primeras propiedades serán cadenas vacías, la localización será 0 por defecto y prestado estará a false.
    //     o Con parámetros: se pasarán solo las cinco primeras propiedades; la propiedad prestado será false.
    constructor(nombre = "", grupo = "", año = "", genero = "", localizacion = 0) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.año = año;
        this.genero = genero;
        this.localizacion = localizacion;
        this.prestado = false;
    }
    // • Un método que permitirá cambiar el número de estantería en la localización.
    setLocalizacion(localizacion = 0) {
        this.localizacion = localizacion;
    };
    // • Un método que permitirá cambiar la propiedad prestado.
    setPrestado(prestado = false) {
        this.prestado = prestado;
    }
    // • Un método que muestre toda la información de un disco.
    info() {
        return this.nombre + " - " + this.grupo + ". " + this.año + ". Genero " + this.genero + ". Estantería: " +
            this.localizacion + ". Prestado: " + this.prestado;
    }

}

// Haz un script que gestione una lista de discos, utilizando las funciones para manejar el objeto de tipo disco que has creado en el ejercicio anterior.

// Crea un array vacío para almacenar los discos.
let discos = new Array();

// Cuando el usuario cargue la página, se mostrarán las opciones:
do {
    op1 = prompt("Escoja:\n1. Mostrar número de discos.\n2.Mostrar listado de discos.");
    switch (op1) {
        case "1":
            // • Mostrar número de discos.
            alert(discos.length);
            break;
        case "2":
            // • Mostrar listado de discos (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente).
            op2 = prompt("Escoja orden:\n1. Según se encuentran.\n2. Del revés.\n2. Alfabético.");
            do {
                switch (op2) {
                    case "1":
                        if (discos.length > 0) {
                            info = "";
                            discos.forEach(disco => {
                                info += disco.info() + "\n";
                            }); 
                        }

                        break;
                    case "1":

                        break;
                    case "1":

                        break;
                }
            } while (op2 != null);
            break;

        case "3":
            ;
            break;
        case "4":
            ;
            break;
        case "5":
            ;
            break;
    }
} while (op1 != null);

// • Mostrar un intervalo de discos (y le pedirá que introduzca el intervalo en formato iniciofin; luego deberás extraer el valor inicio y fin).
// • Añadir un disco (y le preguntará si quiere añadir al principio o al final).
// • Borrar un disco (y le preguntará si quiere borrar al principio o al final).
// • Consultar un disco (y le preguntará si quiere consultar por posición o por nombre).
// • Todas las operaciones que se realicen se irán mostrando en la página con su título.;