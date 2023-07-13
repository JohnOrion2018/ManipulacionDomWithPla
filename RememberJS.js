/*
let name = "john";
let lastname="pinedty";
let moneySave= 153165646;
let debts= 45455;
let total;

let total= moneySave-debts;
console.log ("mi nombre es" ($name)  ($lastname))
"el total del dinero es  " ($total);
*/
/*
const Name = "John ";
const lastname = "pineda";
const completoName = Name + lastname;
const nickname = "jopi";

console.log (mi nombre es + completoName + , "pero puedes decirme  " + nickname + ".");

 function Soy(Name, lastname, nickname){
     const completoName = nombreCompleto(name, lastname);
     console.log ("me llamo"+ completoName + "pero puedes decirme " + " " + nickname ".")
 }
 Soy('kalel', 'pineda', 'kalete');




const tipoSuscripcion = "basica";

switch(tipoSuscripcion){
    case "free":
        console.log("solo cursos gratis");
        break;
    case "basico":
        console.log("cursos  por 1 mes");
        break;
    case "experto":
        console.log("cursos por 1 año");
        break;ç
    case "expertPlus":
        console.log("unos mas dos por un año");
        break;

}



if(tipoSuscripcion === "free")
{
    console.log("cursos solo gratis");
}
elseif (tipoSuscripcion === 'basic');
{
    console.log('cursos por 1 mes');
}
elseif (tipoSuscripcion === 'experto');
{
    console.log('cursos x 1 año');
}
elseif (tipoSuscripcion === 'expertPlus');
{
    console.log('uno mas otro por 1 año');
}



let tipoSuscripcion = {
    free: 'solo cursos gratis', 
    basico: 'cursos por 1 mes',
    experto: 'cursos x 1 año',
    expertPlus:'uno mas otro por un año'
}
if(Suscripcion){
    console.log(tipoSuscripcion[tipoSuscripcion])
}


for(let i=0;i<5;i++){
console.log('el valor de i es :'+i);
}

let i=0;
while(i<5){
    console.log('el valor de i es:'+i);
    i++;
}



for(let i =10;i>=2;i--){
console.log('el valor de i es : ' +i);
}

let i=10;
while (i >=2) {
    console.log('el valor de i es: ' +i);
    i--;
}

*/



/* codigo que sume dos numeros si responde bien mensaje de felicitaciones.

function sumados(){
    let resultado = parseInt(prompt('escriba el resultado de sumar 2 + 2'));

if (resultado ===4) {
    alert ('Felicidades');
}else{
    alert('intentalo de nuevo');
    sumados();
}
}

const bibliaAT = ['genesis','exodo','levitico','cronicas','reyes','job'];
 function leerBiblia(array){
     console.log(array[0])
 }
 leerBiblia(bibliaAT);



const biblia = ['genesis','exodo','levitico','cronicas','reyes','job'];

function leerBiblia(array){
    array.forEach(element => console.log(element)) ;
}
leerBiblia(biblia);

*/
// este codigo debo analizarlo.
const   biblia  = {
    genesis : 'primer libro',
    exodo : 'segundo libro',
    levitico : 'tercer libro',
}
function ImprimirCadaElemento (object ={}){
    for (let key in object){
        console.log(object[key])
    }
}

ImprimirCadaElemento(biblia);


















