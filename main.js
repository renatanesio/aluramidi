function tocarSom(idSomElemento) {
   const elemento = document.querySelector(idSomElemento);
   if (elemento && elemento.localName === 'audio') {
       elemento.play();

   } else {
       console.log('Elemento não encontrado ou seletor inválido!');
   }

}

const listaDeTeclas = document.querySelectorAll('.tecla');


let index = 0;

for (let index = 0; index < listaDeTeclas.length; index++) {
    const tecla = listaDeTeclas[index];
    const instrumento = tecla.classList[1];
    const idSomElemento = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocarSom(idSomElemento);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space")
            console.log(evento.code);
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}