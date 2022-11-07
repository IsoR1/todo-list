import header from './header.js';
import mainTag from './mainContent.js';
import form from './form.js';

header();
mainTag();
form();

const submitButton = document.getElementById('submit-btn-id');
let myForm = document.getElementById("form-id");


myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let titleInput = document.getElementById('input-title-id');
  let desInput = document.getElementById('input-description-id');
  let dateInput = document.getElementById('input-date-id');
  let prioInput = document.getElementById('input-priority-id');

  console.log(titleInput.value, desInput.value, dateInput.value, prioInput.value)
  
})


