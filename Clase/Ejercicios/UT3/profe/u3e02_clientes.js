/*
creados a partir de un literal de objetos o bien, con objetos anidados, tú eliges. Se trata de que utilices los métodos que podemos aplicar al manejo de objetos. Aquí tienes el enunciado de nuevo:
Dispones del siguiente archivo de texto:
Cliente;Localidad;Cuota
Laura;Santander;50
Álvaro;Castro;50
Igor;Castro;60
Ivan;Santander;40
Mónica;Zamora;30
Javi;Bilbao;30
David;Bilbao;50
José Luis;Bilbao;60
A partir del mismo, el usuario podrá elegir del menú:
1. Todos: se mostrará una tabla con los valores que están en la variable anterior.
2. Clientes de una localidad: se pedirá una localidad al usuario y se mostrarán en una tabla los nombres y cuotas de las personas que viven en esa localidad.
3. Clientes que tengan una cuota mayor que un valor pedido al usuario: se pedirá la cuota y se mostrarán en una tabla los nombres de clientes, localidad y cuotas de aquellos que tienen una cuota superior al valor introducido por el usuario.
*/

//Funciones para realizar las acciones del menú
//1. Todos: tabla con los valores. 
function mostrarClientes(clientes) {
    document.write("<table><tr><th>Cliente</th><th>Localidad</th><th>Cuota</th></tr>");
    for (let i in clientes) {
        document.write("<tr>");
        for (let j in clientes[i])
            document.write("<td>" + clientes[i][j] + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

//2. Clientes de una localidad.
function clientesLocalidad(clientes, localidad = "") {
    document.write("<h3>Clientes de " + localidad + "</h3>");
    document.write("<table><tr><th>Cliente</th><th>Localidad</th><th>Cuota</th></tr>");
    for (i in clientes) {
        if (clientes[i].localidad === localidad) {
            document.write("<tr><td>" + clientes[i].cliente + "</td><td>" + clientes[i].localidad + "</td><td>" + clientes[i].cuota + "</td></th>");
        }
    }
    document.write("</table>");
}

//3. Clientes que tengan una cuota mayor que un valor pedido al usuario.
function clientesCuota(clientes, cuota = 0) {
    document.write("<h3>Clientes con cuota superior a " + cuota + "</h3>");
    document.write("<table><tr><th>Cliente</th><th>Localidad</th><th>Cuota</th></tr>");
    for (i in clientes) {
        if (clientes[i].cuota > cuota) {
            document.write("<tr><td>" + clientes[i].cliente + "</td><td>" + clientes[i].localidad + "</td><td>" + clientes[i].cuota + "</td></th>");
        }
    }
    document.write("</table>");
}




//Datos de los clientes
let clientes = [{

    
        cliente: "Laura",
        localidad: "Santander",
        cuota: 50
    },
    {
        cliente: "Álvaro",
        localidad: "Castro",
        cuota: 50
    },
    {
        cliente: "Igor",
        localidad: "Castro",
        cuota: 60
    },
    {
        cliente: "Iván",
        localidad: "Santander",
        cuota: 40
    },
    {
        cliente: "Mónica",
        localidad: "Zamora",
        cuota: 30
    },
    {
        cliente: "Javi",
        localidad: "Bilbao",
        cuota: 30
    },
    {
        cliente: "David",
        localidad: "Bilbao",
        cuota: 50
    },
    {
        cliente: "José Luis",
        localidad: "Bilbao",
        cuota: 60
    }
];

//Menú
let opcion = 0;
do {
    opcion = +prompt("Elige una opción: \n1. Mostrar los datos de todos los clientes.\n2. Mostrar los clientes de una localidad.\n3. Mostar los clientes con cuota mayor a X.");
} while (opcion != 1 && opcion != 2 && opcion != 3);

switch (opcion) {
    case 1:
        mostrarClientes(clientes);
        break;
    case 2:
        let localidad = prompt("¿De qué localidad?");
        clientesLocalidad(clientes, localidad);
        break;
    case 3:
        let cuota = parseFloat(prompt("¿Mayor a qué cuota?"));
        clientesCuota(clientes, cuota);
        break;
    default:
        document.write("No es una opcion válida.");
        break;
}