//ESERCIZIO 1 TERMOMETRO

function getTemperatureStatus(degrees) {
  if (degrees < 10) {
    return "Freddo";
  } else if (degrees >= 10 && degrees < 30) {
    return "Mite";
  } else if (degrees >= 30) {
    return "Caldo";
  } else {
    return "Inserisci la temperatura nel modo corretto mettendo un valore numerico";
  }
}
console.log(getTemperatureStatus("20"));

//ESERCIZIO 2 OBJECT

const MyProfile = {
  name: "Alessio",
  surname: "Restivo",
  age: 21,
  "favourite-sport": "calcio",
  hobby: "giocare ai videogame",
  presentation: function () {
    return `Ciao a tutti mi chiamo ${this.name} ${this.surname} e ho ${this.age} anni. Il mio sport preferito è il ${this["favourite-sport"]} e nel tempo libero preferisco ${this.hobby}.`;
  },
};
console.log(MyProfile.presentation());

//ESERCIZIO AVANZATO

const preferiti = [];

function aggiungiAiPreferiti(film) {
  preferiti.push(film);
}

function mostraPreferiti() {
  console.log(preferiti);
}

function rimuoviDaiPreferiti(film) {
  const index = preferiti.indexOf(film);
  if (index > -1) {
    preferiti.splice(index, 1);
  }
}

aggiungiAiPreferiti("Infinity War");
aggiungiAiPreferiti("Transformers");
mostraPreferiti();
rimuoviDaiPreferiti("Infinity War");
mostraPreferiti();
