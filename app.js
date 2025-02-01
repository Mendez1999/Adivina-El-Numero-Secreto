let NumeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(NumeroSecreto);

function asignartextoElemento(eLemento, texto) {
    let elementoHTML = document.querySelector(eLemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsuario === NumeroSecreto) {
        asignartextoElemento('P',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto 
        if (numeroDeUsuario > NumeroSecreto) {
            asignartextoElemento('P','El numero secreto es menor');
        } else {
            asignartextoElemento('P','El numero secreto es mayor');
        }
        intentos++;
        limpiarCa();
    }
    return;
}

function limpiarCa() {
   document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //si ya sorteamos todos los numeros??
   if (listaNumerosSorteados.length == numeroMaximo) {
       asignartextoElemento('p','Ya se sortearon todos los numeros posibles');
 } else {
    // si el numero generado esta incluido en la lista??
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
 }   
}

function condicionesIniciales() {
    asignartextoElemento('h1','Juego del numero secreto');
    asignartextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    NumeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar ca
    limpiarCa();
    // Indicar mensaje de intervalo de numero
    // Generar numero aletorio
    // Inicializar el numero de intentos
    condicionesIniciales();
      //Deshabilitar el boton de nuevo juego
      document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();