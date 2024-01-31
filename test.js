let Stockage = JSON.parse(localStorage.getItem('peaplelist')) || [];

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

// Événement de clic pour le bouton "Valider"
document.addEventListener('DOMContentLoaded', function () {
  afficherDonnees();
});
valid.addEventListener('click', () => {
  let Stockage = JSON.parse(localStorage.getItem('peaplelist')) || [];
  if (
    Inputprenom.value === '' ||
    Inputnom.value === '' ||
    somme.value === '' ||
    date.value === ''
  ) {
    alert('Remplir tous les champs');
  } else {
    // Mise à jour du total
    if (transaction.value === retrait.value) {
      let newTotal = parseFloat(total.innerText) - parseFloat(somme.value);
      total.innerText = newTotal;
    }
    if (transaction.value === depot.value) {
      let somtotal = parseFloat(total.innerText) + parseFloat(somme.value);
      total.innerText = somtotal;
      console.log(typeof somtotal);
    }

    let objet = {
      Inputprenom: Inputprenom.value,
      Inputnom: Inputnom.value,
      somme: somme.value,
      date: date.value,
      transaction: transaction.value,
    };

    Stockage.push(objet);

    // Affichage des données dans le tableau HTML
    afficherDonnees();
    localStorage.setItem('peaplelist', JSON.stringify(Stockage));
  }
});

// Fonction pour afficher les données dans le tableau HTML
let body = document.querySelector('tbody');
function afficherDonnees() {
  let Stockage = JSON.parse(localStorage.getItem('peaplelist')) || [];
  //   let html =
  let html = Stockage.map(function (element, index) {
    return `
            <tr>
                <td>${element.Inputprenom}</td>
                <td>${element.Inputnom}</td>
                <td>${element.somme}</td>
                <td>${element.date}</td>
                <td>${element.transaction}</td>
                <td>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                    <button onclick="update(${index})"  class="btn">
                    <i class="fa-solid fa-pen-nib"></i>
                    </button>
                    <button onclick="supprimer(${index})"  "class="btn">
                        <i class="fa-solid fa-box-archive"></i>
                    </button>
                </td>
            </tr>`;
  }).join('');
  body.innerHTML = html;

  Inputprenom.value = '';
  Inputnom.value = '';
  somme.value = '';
  date.value = '';
  transaction.value = '';
}
// supprimer
function supprimer(index) {
  let Stockage = JSON.parse(localStorage.getItem('peaplelist')) || [];
  Stockage.splice(index, 1);
  localStorage.setItem('peaplelist', JSON.stringify(Stockage));
  afficherDonnees();
}
// function update

function update(index) {
  document.getElementById('edit').style.display = 'block';
  document.getElementById('valider').style.display = 'none';

  let Stockage = JSON.parse(localStorage.getItem('peaplelist')) || [];

  Inputprenom.value = Stockage[index].Inputprenom;
  Inputnom.value = Stockage[index].Inputnom;
  somme.value = Stockage[index].somme;
  date.value = Stockage[index].date;
  transaction.value = Stockage[index].transaction;

  document.querySelector('#edit').onclick = function () {
    Stockage[index].Inputprenom = Inputprenom.value;
    Stockage[index].Inputnom = Inputnom.value;
    Stockage[index].somme = somme.value;
    Stockage[index].date = date.value;
    Stockage[index].transaction = transaction.value;

    localStorage.setItem('peaplelist', JSON.stringify(Stockage));
    afficherDonnees();

    document.getElementById('edit').style.display = 'none';
    document.getElementById('valider').style.display = 'block';
    console.log(Inputprenom);
  };
  // update();

  Inputprenom.value = '';
  Inputnom.value = '';
  somme.value = '';
  date.value = '';
  transaction.value = '';
}
