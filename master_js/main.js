
alert("Hola, Bienvenido a Rocket Comis!!");

let ingreseNombre = prompt(`Como te llamas?`);


if( ingreseNombre != ""){
   alert(`Hola ` + ingreseNombre + ` un gusto :)`);
}else if (ingreseNombre == ""){
   alert(`No me dijiste tu nombre...`);
   ingreseNombre = prompt(`Como te llamas?`);
   alert(`Hola ` + ingreseNombre + ` un gusto :)`);
}

let compraTotal = 0;

let producto = prompt(`Que te gustaria comprar...? mangas, comics o novelas?`);

let precio = parseFloat(prompt(`Ok...Ingrese su precio por favor`));

let cantidad = parseInt(prompt(`Muy bien!! Que cantidad?`));

let compra = alert(`Su compra es de $`+ (precio*cantidad));

let sugerencia = prompt(`Quiere seguir comprando?`)

if (sugerencia == "si") {
   
let producto2 = prompt(`Que te gustaria comprar mangas, comics o novelas?`);

let precio2 = parseFloat(prompt(`Ok...Ingrese su precio por favor`));

let cantidad2 = parseInt(prompt(`Muy bien!! Que cantidad?`));

let compra2 = alert(`Su compra es de $`+ (precio2*cantidad2));
   
} else if (sugerencia == "no") {
   alert("gracias por su compra :)");
}

compraTotal =alert( "El total es $" + (compra+compra2));
























