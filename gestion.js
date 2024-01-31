// filter recherche
function filtrerTableau() {
  var filter, tableau, ligne, cellule, i, text;
  filter = document.getElementById('recherche').value.toUpperCase();
  tableau = document.getElementById('table');
  ligne = tableau.getElementsByTagName('tr');
  for (i = 0; i < ligne.length; i++) {
    cellule = ligne[i].getElementsByTagName('td')[0];
    if (cellule) {
      text = cellule.innerText;
      if (text.toUpperCase().indexOf(filter) > -1) {
        ligne[i].style.display = '';
      } else {
        ligne[i].style.display = 'none';
      }
    }
  }
}

// function Pagination() {
//   const totalItems = array.length;
//   // La Math.ceil()méthode arrondit :un nombre arrondi à l’entier le plus proche.
//   const totalPages = Math.ceil(totalItems / 5);
//   const pagination = document.getElementById('pagination');
//   pagination.innerHTML = '';
//   for (let i = 1; i <= totalPages; i++) {
//     const li = document.createElement('li');
//     li.classList.add('page-item');
//     const link = document.createElement('a');
//     link.classList.add('page-link');
//     link.href = '#';
//     link.textContent = i;
//     link.addEventListener('click', () => {
//       AfficherPersonnes(i);
//     });
//     li.appendChild(link);
//     pagination.appendChild(li);
//   }
// }

let Inputprenom = document.getElementById('prenom');
let Inputnom = document.getElementById('nom');
let somme = document.getElementById('somme');
let transaction = document.getElementById('Transaction');
let date = document.getElementById('date-heure');
let valid = document.getElementById('valider');
let total = document.getElementById('total');
let retrait = document.getElementById('Retrait');
let depot = document.getElementById('depot');
let table = document.getElementById('table');

total.innerText = 100000;
//  function valider() {

//  }
valid.addEventListener('click', () => {
  if (
    Inputprenom.value == '' ||
    Inputprenom.value == '' ||
    Inputnom.value == '' ||
    somme.value == '' ||
    date.value == ''
  ) {
    alert('Remplir les champs');
  }

  if (transaction.value === retrait.value) {
    let newTotal = parseFloat(total.innerText) - parseFloat(somme.value);
    total.innerText = newTotal;
  }
  if (transaction.value === depot.value) {
    let somtotal = parseFloat(total.innerText) + parseFloat(somme.value);
    total.innerText = somtotal;
    console.log(typeof somtotal);
  } else {
    table.innerHTML += `<tr>
        <td>${Inputprenom.value}</td>
        <td>${Inputnom.value}</td>
        <td>${somme.value}</td>
        <td>${date.value}</td>
       <td>${transaction.value}</td>
      <td>
      <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
 <i class="fa-solid fa-eye"></i>
 </button>
 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${transaction.value}</h1>
       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    <div class="prenom">
       <p class="d"> Prenom<span>${Inputprenom.value}</span></p>
       <p class="d"> Nom> <span>${Inputnom.value}</p>

     
//     </div>
//       <div class="">
//       <p class="d "> Somme :<span>${somme.value}</span></p>
//        <p class="d">Date <span>${date.value}</span> </p>
//        </div>
//        </div>
//     </div>
//   </div>
//  </div>
//  <i class="fa-solid fa-pen-nib"></i>
//    <i class="fa-solid fa-box-archive" id="delete"></i>
//     </div>

//       </td>
//    </tr>`;
  }
  Inputprenom.value = '';
  Inputnom.value = '';
  somme.value = '';
  date.value = '';
  transaction.value = '';
});
let del = document.getElementById('delete');
del.addEventListener('click', () => {
  table.remove();
});
