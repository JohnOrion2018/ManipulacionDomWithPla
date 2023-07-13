const h1 = document.querySelector('h1');
const form  = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


/*

console.log({
    h1,p,input,
});
// si utilizo innerHTML me muestrs solo el html, si en cambio uso  innerText me muestrs toooodo el codigo
h1.innerHTML= 'Nathan Kalel <br> es mi hijo ';
/// nos ayuda a leer algunos de los atributos de nuestro elemento
console.log(h1.getAttribute('class'));


// con setAtribute, modificamos los atributos en html
console.log(h1.setAttribute('class', 'amarillo'));

/// otra funcion que funciona especificamente con las clases es ...
h1.classList.add('rojo');
h1.classList.remove('amarillo');

input.value= '123';

const img =document.createElement('img');
img.setAttribute('src','https://pics.filmaffinity.com/dr_stone-907035932-large.jpg');
console.log(img);

p.append(img);
p.innerHTML = img; 
*/
// form.addEventListener('submit', sumarInputsValues);
// function sumarInputsValues(event){
//     //console.log({event});
//     event.preventDefault();
//    const sumaInputs = input1.value + input2.value;
//    pResult.innerText = "Resultado : " +  sumaInputs;
// }


btn.addEventListener('click', sumarInputsValues);
function sumarInputsValues(event){
    //console.log({event});
    //event.preventDefault();
   const sumaInputs = input1.value + input2.value;
   pResult.innerText = "Resultado : " +  sumaInputs;
}
document.getElementById