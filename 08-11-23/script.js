//ESERCIZIO 1

const sum = (firstNum, secondNum, thirdNum) => firstNum + secondNum + thirdNum;

const sub = (firstNum, secondNum, thirdNum) => firstNum - secondNum - thirdNum;

const mult = (firstNum, secondNum, thirdNum) => firstNum * secondNum * thirdNum;

const div = (firstNum, secondNum, thirdNum) => {
  if (secondNum === 0 || thirdNum === 0) {
    return "Errore,stai dividendo per zero"; //Ho messo questa condizione altrimenti la divisione per 0 dava errore
  } else {
    return firstNum / secondNum / thirdNum;
  }
};

const calculator = (operation, firstNum, secondNum, thirdNum) =>
  operation(firstNum, secondNum, thirdNum);

console.log(calculator(sum, 20, 2, 5)); //Stampa la somma dei valori
console.log(calculator(sub, 20, 2, 5)); //Stampa la sottrazione dei valori
console.log(calculator(mult, 20, 2, 5)); //Stampa la moltiplicazione dei valori
console.log(calculator(div, 20, 2, 5)); //Stampa la divisione dei valori

//ESERCIZIO 2

const cart = [
  {
    id: 1,
    name: "PS5",
    img: "https://www.playstation.com/",
    descr: "Sconto del 20%",
  },
  {
    id: 2,
    name: "Controller",
    img: "https://www.playstation.com/",
    descr: "Sconto del 30%",
  },
  {
    id: 3,
    name: "EA FC 24",
    img: "https://www.playstation.com/",
    descr: "Sconto del 40%",
  },
];

// map

cart.map((prodotto) => {
  console.log(prodotto);
});

// forEach

cart.forEach((prodotto) => {
  console.log(prodotto);
});

// Map è un metodo che ti restituisce un nuovo array basato sull’array originale, mentre forEach non restituisce nulla, ma esegue un’operazione su ogni elemento dell’array.

// AVANZATO(solamente la parte dei due array transformati con map)

let array1 = [3, 6, 9, 12];

let array2 = [5, 10, 15, 20];

// TRANSFORMAZIONE

const array1Transformato = array1.map((x) => x * 2);

const array2Transformato = array2.map((x) => x + 5);

console.log(array1Transformato);
console.log(array2Transformato);
