// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosSecretos = [];
  let lista = document.getElementById("listaAmigos");

let boton = document.getElementById('addBtn');
//declaro variable para generar indice del ArrayList entre 0 y el tamaño del ArrayList

function limpiarCampo() {
  document.getElementById("amigo").value = "";
}

function agregarAmigo() {
  //Alamcenar en una variable los nombres que añada el usuario
  let nombreIngresado = document.getElementById("amigo").value;
  if (nombreIngresado === "") {
    alert("Por favor ingrese un nombre");
  } else {
    amigosSecretos.push(nombreIngresado);
    limpiarCampo();
    recorrerAmigosSecretos();
    console.log(amigosSecretos);
 
  }
}
//crear funcion que recorra el Array amigosSecretos
function recorrerAmigosSecretos() {

  //limpiar la lista existente
  lista.innerHTML = "";

  //recorrer el Arraylist

  for (let i = 0; i < amigosSecretos.length; i++) {
    //crear un nuevo elemento de lista
    let nuevoElemento = document.createElement("li");

    //asignar el nombre del amigo como contenido de texto del elemento li
    nuevoElemento.textContent = amigosSecretos[i];

    //agregar el nuevo elemento a la lista HTML
    lista.appendChild(nuevoElemento);
  }
}

//Crear una funcion para poder sorter el amigo secreto
function sortearAmigo() {
  if (amigosSecretos.length >0) {
       let indiceArray = Math.floor(Math.random() * amigosSecretos.length);
    console.log(indiceArray);
    let amigoSorteado = amigosSecretos[indiceArray];
    console.log (amigoSorteado);
    
    let listaSorteo = document.getElementById('resultado');
    listaSorteo.innerHTML = '';
    let resultado = document.createElement("li");
    resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    listaSorteo.appendChild(resultado);


  } else {
        alert("Por favor ingrese un nombre para sortear");

  }
}

boton.addEventListener('click', function(){
    lista.style.display = 'none';
})