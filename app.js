function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoHot = document.getElementsByClassName("modo_hot")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) });

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirías que SÍ. Casemonos ya y tengamos hijos. TE AMO!!!! ❤️');

    divModoHot.style.display = 'block';
    const cancion = new Audio('modo_hot.mp3');
    cancion.play();
});
divModoHot.addEventListener('click', function(e) {
    divModoHot.innerHTML = "<img src='https://i.pinimg.com/originals/c5/e3/c9/c5e3c9b5260daa31f5a4ab03ff048ece.png'>";
})
divModoHot.addEventListener('click', function(e) { 
    const img = document.createElement("img");
    //querySelector te busca un elemento aunque no tenga id o class
    img.src = "https://i.pinimg.com/originals/c5/e3/c9/c5e3c9b5260daa31f5a4ab03ff048ece.png";
    divModoHot.appendchild(img);
})
 //divModoHot.appendChild = "<img src='https://i.pinimg.com/originals/c5/e3/c9/c5e3c9b5260daa31f5a4ab03ff048ece.png'>"; no funcionaria solito ya que habira que crear un nodo de imagen qu elo pueda contener primero pero si haces inner html sobreescribe otros elementos que esten dentro en cambio con apend child solo agrega el elemento como imagen
botones = document.getElementsByTagName("button");
console.log(botones);

window.addEventListener('beforeunload', (event) => {
    event.preventDefault()
    event.returnValue = ""
})