// Fonction pour generer un numero aleatoire
function genererNumeroAleatoire() {
    var numero = Math.floor(Math.random() * 900000) + 100000;
    return numero;
}

// Fonction pour executer le click sur le classe "btn2"
function handleClick() {
    var numeroAleatoire = genererNumeroAleatoire();
    var codeElement = document.querySelector('.code');
    codeElement.textContent = numeroAleatoire;

    // Suprimer le code un fois cliqué
    btn2.removeEventListener('click', handleClick);

}

// Cibler le bouton  avec la classe "btn2"
var btn2 = document.querySelector('.btn2');

// evenement click pour le bouton 
  btn2.addEventListener('click', handleClick);


  