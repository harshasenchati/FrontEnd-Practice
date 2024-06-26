
function changtxt() {
  const buttonElement =document.querySelector('.paragraph');

  
  if(buttonElement.className==='paragraph'){
    document.querySelector('.paragraph').innerHTML="The Text Has Been Changed";
    buttonElement.classList.add('paragraphed');

    
  }

  else {
    buttonElement.innerHTML="ICICI Bank Welcomes You Have A Nice Day";
    buttonElement.classList.remove('paragraphed');

  }  
}
function loans() {
  window.location.href = "personal-loan.html";
}

function addData(event) {
  event.preventDefault(); // Prevent form submission and page reload

  // Get input values
  const firstName = document.querySelector('.js-firstName').value;
  const middleName = document.querySelector('.js-middleName').value;
  const lastName = document.querySelector('.js-lastName').value;
  const phoneNumber = document.querySelector('.js-phone').value;

  // Create a new row for the table
  const tableRow = document.createElement('tr');

  // Add data to the row
  tableRow.innerHTML = `
    <td>${firstName}</td>
    <td>${middleName}</td>
    <td>${lastName}</td>
    <td>${phoneNumber}</td>
  `;

  // Append the row to the table
  const dataTable = document.getElementById('dataTable');
  dataTable.appendChild(tableRow);

  // Clear the form fields after submission
  document.querySelector('.js-firstName').value = '';
  document.querySelector('.js-middleName').value = '';
  document.querySelector('.js-lastName').value = '';
  document.querySelector('.js-phone').value = '';
}
