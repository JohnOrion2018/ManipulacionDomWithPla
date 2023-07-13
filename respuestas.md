markdown

## ¿que es una variable? 
es un espacio reservado de memoria que permite almacenar informacion,datos.
## diferencias entre declarar e inicializar una variable.
declararla es solamente  nom;brar la variable, sin indicar que tipo de almacenamiento cumplira, inicializarla es indicar que tipo de informacion almacenara  
## sumar numeros y concatenar.
	sumar numeros es reallizar una operacion matematica, concatenar es unir mediante el signo + caracteres, sumando caracteres en forma de cadena.
 operador de suma y concatenar.
el signo +.
## nombre y tipo de dato para almacenar.
nombre =  string
apellido= string
edad =number
email = string
mayor de edad = boolean
dinero ahorrado= number
deudas= number

### traduce a codigo JS las variables 
let name = "john" ;
let last name = "pinety";
let mail ="pepito@dominio.sur";
let age = 40;
let Adulto= true;
let moneySave= 153165646;
let debts= 45455;

## calcula e imprime las siguientes variables a partir del ejemplo.
 codigo-- visual.
##  que es una funcion?
bloque de codigo que permite realizar una operación.
##  ¿cuando me sirve usar una funcion en mi codigo?
cuando necesitamos devolver un valor como salida, son utilies para encapsular, es reutilizable, puede ser invocada o llamada desde cualquier lugar del programa.

## parametros y argumentos de una funcion.
parametros son variables que nuestra funcion utilizara para realizar la operacion que necesitemos.

las funciones reciben parametros cuando las creamos y les emviamos argumentos cuando las ejecutamos.

funcion suma( par 1, par2){
return par1 + par2};

los argumentos son los datos que le indicamos a la funcion cuando mandamos a llamar, estos datos son utilizados para realizar las operaciones de definimos como argumentos.
  
arg...

sum(3, 10); // 13

- convertir  el siguiente codigo en una función pero cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una funcion.

en visual.


## Condicionales.
es una estructura de codigo que permite realizar una comparacion y tomar una decisión. true o false.
tipos de condicionales en JS.
if, else, elseif, switch 

## diferencias.
if, else, elseif hace diversar conparaciones, validaciones
switch, permite evaluar casos compararlos con la misma variable y tomar decisiones.

##  puedo combinar funciones y condicionales.

si, una funcion puee contener condicionales y retornar diversos  valores ejecutar otras funciones a partir de resultados.

- replica el comportamiento del siguiente codigo que usa a sentencia switch.

## ciclos.
la forma de ejecutar un bloque de codigo hasta que se cumpla cierta condición.

es una estructura  que nos permite realizar iteracones y ejecutar codigo repetidamente  mientras  que se cumpla una condicion.
##  tipos de ciclos en JS
for  --- nos obliga a definir el principio y el final de cada ciclo.

while   --- hace la validacion antes de ejecutar la primera validacion, una y otra vez.

Do while  --- la primera vez no pregunta, primero ejecuta el codigo, luego hace la vallidacion,  y de pendiendo la validacion vuelve a ejecutar el ciclo
### ciclo infinito
ciclo infinito ocurre cuando una condicion siempre se cumple,es estatica y nunca se detiene.  se totio.

## puedo mezclar ciclos y condicionales.

si se puede,  sea dentro de un ciclo o dentro de un condicional o un condicional dentro de un ciclo.

### REPLICA EL COMPORTAMIENTO DE LOS SIGUIENTES CICLOS  FOR UTILIZANDO CICLOS WHILE

for(let i=0;i<5;i++){
consolo.log('el valor de i es :'+i);
}

for(let i =10;i>=2;


## que es un array?
tipo de objeto estructurado que permite almacenar un conjunto de datos diversos de forma asociativa, son accedidos por una variable en lugar de un indice.
- cuando es mejor usar objetos o array?
ambas estructuras son utiles almacenan candidad de datoslos objetos suelen ser muy utiles cuando necesitamos almacenar gran cantidad de datos,que van a ser accedidos por una variable.

- puedo mezclar objetos, arrays o incluso objetos con arrays>?
si, puedo almacenar objetos dentro de arrays y arrays  dentro de objetos.

- crea una funcion  que pueda recibir cualquier array como parametro e imprima si primer elemento.

en visual...
- crea una funcion que pueda recibir cualquier array como parametro e impirma todos sis elementos uno por uno.

en visual...

- crea una funcion  que pueda recibir cualquier objeto como parametro  e imprima  todos sus elementos uno por uno.

 en visual ...

...
const   LeerBiblia  = {
    genesis : 'primer libro',
    exodo : 'segundo libro',
    levitico : 'tercer libro',
}
######undefined

function LeerLibro(leer){ if (LeerBiblia[leer]) {
            console.log(LeerBiblia[leer]); return;   
} console.warn('ese libro no es biblico')}

###undefined
LeerLibro('genesis')
VM1927:3 primer libro
undefined
LeerLibro('exodo')
VM1927:3 segundo libro



## node js, navegador web  entorno de ejecucion de js   varias formas de ejecutar...


## nombre : John Pineda 
## edad   : 43 
## Nac/dad: colombiano
## Experiencia: desarrollador, bases de datos, manejo de aps, diseño
## residencia: alcala de henares
## telefono: 625902834
