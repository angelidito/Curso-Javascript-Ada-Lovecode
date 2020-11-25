// Realiza de nuevo el ejercicio u2e06_clientes pero en este caso con un array de objetos creados a partir de un literal de objetos o bien, con objetos anidados, tú eliges. Se trata de que utilices los métodos que podemos aplicar al manejo de objetos. Aquí tienes el enunciado de nuevo:
// Gracias por el enunciado

// Dispones del siguiente archivo de texto:
// Cliente;Localidad;Cuota\nLaura;Santander;50\nÁlvaro;Castro;50\nIgor;Castro;60\nIvan;Santander;40\nMónica;Zamora;30\nJavi;Bilbao;30\nDavid;Bilbao;50\nJosé Luis;Bilbao;60
let textoDelArchivo = "Cliente;Localidad;Cuota\nLaura;Santander;50\nÁlvaro;Castro;50\nIgor;Castro;60\nIvan;Santander;40\nMónica;Zamora;30\nJavi;Bilbao;30\nDavid;Bilbao;50\nJosé Luis;Bilbao;60";

let objetos = [];

let lineas = textoDelArchivo.split("\n");

let columnas = lineas[0].split(";");
let c1 = columnas[0];
let c2 = columnas[1];
let c3 = columnas[2];
console.log(c1);
for (let i = 1; i < lineas.length; i++) {
    const linea = lineas[i];
    let columnas = linea.split(";");
    objetos.push({
        c1: columnas[0],
        c2: columnas[1],
        c3: columnas[2]
    })
}
for (let i = 0; i < objetos.length; i++) {
    const elem = objetos[i];
    console.log(elem);
}



// A partir del mismo, el usuario podrá elegir del menú:
// 1. Todos: se mostrará una tabla con los valores que están en la variable anterior.
// 2. Clientes de una localidad: se pedirá una localidad al usuario y se mostrarán en una tabla los nombres y cuotas de las personas que viven en esa localidad.
// 3. Clientes que tengan una cuota mayor que un valor pedido al usuario: se pedirá la cuota y se mostrarán en una tabla los nombres de clientes, localidad y cuotas de aquellos que tienen una cuota superior al valor introducido por el usuario.




// A partir del mismo, el usuario podrá elegir del menú:
// var op = prompt("Escoja una opción:\n   1.Todos.\n   2.Clientes de una localidad.\n   3.Clientes con cuota mayor a X.");

// var tabla = "<table>";
// switch (op) {
//     case "1":
//         // 1.Todos: se mostrará una tabla con los valores que están en la variable anterior.
//         datos.forEach(fila => {
//             tabla += "<tr>";
//             fila.split(";").forEach(columna => {
//                 tabla += "<td>" + columna + "</td>";
//             });
//             tabla += "</tr>";
//         });

//         break;
//     case "2":
//         // 2.Clientes de una localidad: 
//         // se pedirá una localidad al usuario 
//         var localidad = prompt("Especifique una localidad:");

//         //y se mostrarán en una tabla los nombres y cuotas de las personas que viven en esa localidad.
//         datos.forEach(fila => {
//             var columnas = fila.split(";");
//             if (columnas[1] == localidad)
//                 tabla += "<tr><td>" + columnas[0] + "</td><td>" +
//                 columnas[2] + "</td></tr>";
//         });

//         break;
//     case "3":
//         // 3.Clientes que tengan una cuota mayor que un valor pedido al usuario:
//         // se pedirá la cuota 
//         var cuota = prompt("Especifique una cuota:");

//         // y se mostrarán en una tabla los nombres de clientes, localidad y cuotas de aquellos que tienen una cuota superior al valor introducido por el usuario.
//         datos.forEach(fila => {
//             var columnas = fila.split(";");
//             if (columnas[2] > cuota)
//                 tabla += "<tr><td>" + columnas[0] + "</td><td>" +
//                 columnas[1] + "</td><td>" +
//                 columnas[2] + "</td></tr>";
//         });

//         break;
// }
// tabla += "</table>";

// // Mostramos la tabla.
// document.write(tabla);