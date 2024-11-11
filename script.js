//esercizio 1
class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    // Metodo per confrontare l'età con un altro utente
    compareAge(otherUser) {
      if (this.age > otherUser.age) {
        return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
      } else if (this.age < otherUser.age) {
        return `${this.firstName} è più giovane di ${otherUser.firstName}`;
      } else {
        return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
      }
    }
  }
  
  // Creazione di alcuni oggetti User
  const user1 = new User("Mario", "Rossi", 30, "Roma");
  const user2 = new User("Luigi", "Bianchi", 25, "Milano");
  
  // Confronto dell'età tra gli utenti
  console.log(user1.compareAge(user2)); // Mario è più vecchio di Luigi
  console.log(user2.compareAge(user1)); // Luigi è più giovane di Mario

  //esercizio 2
  class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
  
    // Metodo per verificare se due animali hanno lo stesso proprietario
    hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }
  
  // Array per memorizzare gli oggetti Pet creati
  const pets = [];
  
  // Selezione degli elementi del DOM
  const petForm = document.getElementById("petForm");
  const petList = document.getElementById("petList");
  
  // Funzione per aggiungere un pet alla lista e visualizzarlo
  function addPetToList(pet) {
    const listItem = document.createElement("li");
    listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petList.appendChild(listItem);
  }
  
  // Gestione del submit del form
  petForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Raccolta dei valori dal form
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
  
    // Creazione di un nuovo oggetto Pet
    const newPet = new Pet(petName, ownerName, species, breed);
  
    // Aggiunta dell'oggetto Pet all'array e visualizzazione
    pets.push(newPet);
    addPetToList(newPet);
  
    // Pulizia dei campi del form
    petForm.reset();
  });
  