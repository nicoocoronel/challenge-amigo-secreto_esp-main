//Array para almacenar los nombres de los amigos
let amigos = [];

//funcion para agrear un amigo
function agregarAmigo() {
      const inputAmigo = document.getElementById('amigo');
      const nombreAmigo = inputAmigo.value.trim();


      //validar que el campo no este vacio
      if(nombreAmigo === ""){
        alert('Por favor, inserte un nombre.');
        return; //detiene la ejecucion de la funcion 
      }

      //validar que el nombre no este repetido
      if(amigos.includes(nombreAmigo)){
        alert(`el nombre ${nombreAmigo} ya esta en la lista`);
        return;
      }

      //Agrear el nombre al array de amigos
      amigos.push(nombreAmigo);

      //limpiar el campo de entrada
      inputAmigo.value = "";

      //actualizar la lista en el html
      actualizarLista();

}

//funcion para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; //borra cualquier contenido previo del contenedor

    //recorrer el array con un ciclo for
    for(let i = 0; i<amigos.length; i++);
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li)
}


//funcion para seleccionar un amigo aleatorio 
function sortearAmigo(){
    //validar que haya amios disponibles
    if(amigos.length === 0){//comprueba que la lista no esta vacia
       alert("no hay amigos disponibles en la lista para sortear");
       return;
    }

    //generar un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random()*amigos.length); //genera un numero aleatorio entre 0 y la longitud del array menos 1

    //obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; //usa el indice aleatorio

    //mostrar el resultado en el html
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `amigo sorteado: <strong>${amigoSorteado}<strong>`;

}


