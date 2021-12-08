alert('hola mundo!');

//Variables
var nombre= "Victor Robles";
var altura= 190;

var concatenacion=nombre + " " + altura;
/*Para mostrar en pantalla
document.write(nombre);
document.write(altura);
document.write(concatenacion);
*/

//Imprimiendo por id

//var datos= document.getElementById("datos"); Usada en la funcion abajo
//datos.innerHTML=concatenacion;


/*Usada en funcion abajo
//Usando el temaplateString para implementar html en .js
datos.innerHTML= `
    <h1> Soy la caja de datos</h1>
    <h2> Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3> 
`;
*/

//Estructuras de control

//Condicional
if(altura >= 190){

    //Pero esto sobreescribiría el div
    //datos.innerHTML =`<h1> Eres una persona ALTA </h1>`;

    //Se usa el operador += para añadir contenido y no sobreescribir
    datos.innerHTML +=`<h1> Eres una persona ALTA </h1>`;
}else{
    datos.innerHTML +=`<h1> Eres una persona BAJA </h1>`;
}

//Bucles

for(var i= 2000; i<=2020 ; i++){

    datos.innerHTML +="<h1> Estamos en el año </h1>" +i;
}

//Funciones
 function MuestraMiNombre(nombre, altura){
    //Usando el temaplateString para implementar html en .js
    datos.innerHTML= `
    <h1> Soy la caja de datos</h1>
    <h2> Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3> 
    `;
 }

 function MuestraMiNombre(nombre, altura){
    //Usando el temaplateString para implementar html en .js
    var misDatos= `
    <h1> Soy la caja de datos</h1>
    <h2> Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3> 
    `;

    return misDatos;
 }

 function imprimir(){

    var datos= document.getElementById("datos");
    datos.innerHTML= MuestraMiNombre("Juan Velasquez", 190);
 }

 imprimir();

 //Variables de multiples valores, o arrays

 var nombres = ['Victor', 'Sebastian','Juan'];

 alert(nombres[1]);

 document.write('<h1> Listado de nombres con For </h1>');

 //Mostrando elementos del array con for
 for (i=0; i<nombres.length; i++){
     document.write(nombres[i] + '<br>');
 }

 //Mostrando elementos con foreach
 document.write('<h1> Listado de nombres con Foreach </h1>');
 nombres.forEach(function(nombre){
    document.write(nombre+ '<br/>');
 });

  //Mostrando elementos con funciones de callback anonimas de flecha
  document.write('<h1> Listado de nombres con Foreach y funciones de callback-anonimas de flecha </h1>');
  nombres.forEach((nombre) =>{
     document.write(nombre+ '<br/>');
  });


// JSON

var coche = {
    modelo:'Mercedes Clase A',
    maxima:500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo,this.maxima,this.antiguedad);
    },
    propiedad:"valor aleatorio"
};

document.write("<h1>"+coche.modelo + "</h1>");

//Llamar a metodo accediendo desde el objeto
coche.mostrarDatos();
console.log(coche);

//Promesas, estructuras u objetos muy usado en peticiones asincronas AJAX, peticiones que pueden tardar
// mucho tiempo en devolver un resultado, o que incluso puede no devolverlo. Una promesa representa un valor que 
// puede estar disponible ahora, en un futuro o nunca

// Con las promesas capturamos la respuesta positiva de un servicio, trozo de código o petición AJAX; o controlar la parte en que esa petición fue rechazada
// Las promesas, nos prometen que nos va a llegar un dato, o nos va a llegar un error

var saludar = new Promise((resolve, reject) => {

    //Funcion que espera unos segundos hasta que algo se ejecute
    // Va a ejecutar la función que tiene ahí dentro a los 2 segundos, y no directamente 
    // al cargar la pág

    setTimeout(()=>{
        //Creación de variable con let
        let saludo= "Hola muy buenas a todos chavalaes!!!";

        //Setar a falso para ver qué pasa si no hay saludo
        //saludo=false;
        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible')
        }
    }, 2000);
} );

// Método Then, es primero ejectuar la promesa saludar y luego el then
saludar.then(resultado =>{
    alert(resultado);
})
.catch(err => {
    alert(err);
});

