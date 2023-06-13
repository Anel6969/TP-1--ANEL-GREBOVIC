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


  

  const validationForm = () => {
    const form = document.querySelector('.form');
    const lastName = document.getElementById('last-name');
    const firstName = document.getElementById('first-name');
    const email = document.getElementById('email');
  
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
  
    let noError = true;
  
    if (lastNameValue === '') {
      setError(lastName, 'Veuillez entrer un nom de famille');
      noError = false;
    } else {
      setSuccess(lastName);
    }
  
    if (firstNameValue === '') {
      setError(firstName, 'Veuillez entrer un prénom');
      noError = false;
    } else {
      setSuccess(firstName);
    }
  
    if (emailValue === '') {
      setError(email, 'Veuillez entrer une adresse email');
      noError = false;
    } else if (!isValidEmail(emailValue)) {
      setError(email, 'Veuillez entrer une adresse email valide');
      noError = false;
    } else {
      setSuccess(email);
    }
  
    return noError;
  };
  
  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.form-group__errorMessage');
  
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
  };
  
  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.form-group__errorMessage');
  
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
  };
  