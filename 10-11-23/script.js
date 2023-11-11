// ESERCIZIO 1

const heroEl = document.createElement("div");
const wrapperEl = document.createElement("div");
const titlEl = document.createElement("h1");
const descriptionEl = document.createElement("p");

heroEl.setAttribute("class", "hero");
wrapperEl.setAttribute("class", "hero-text");
titlEl.textContent = "Benvenuti a tutti";
descriptionEl.textContent = "Questa è la mia sezione hero";

wrapperEl.append(titlEl, descriptionEl);
heroEl.append(wrapperEl);

const btnContainer = document.createElement("div"); //dopo aver creato il titolo e la descrizione della hero creo separatamente il pulsante
const btnEl = document.createElement("button");

btnContainer.setAttribute("class", "button-container");
btnEl.textContent = "Cliccami";

btnContainer.append(btnEl);
document.body.append(heroEl, btnContainer);

// ESERCIZIO 2

btnEl.addEventListener("click", function () {
  heroEl.classList.toggle("hide"); //questo metodo .toggle permette di far apparire e scomparire l'intero wrapper
});

// AVANZATO + AVANZATO PER GLI AUDACI

const imageGenerator = (id, imgUrl, altText) => {
  const imageContainer = document.createElement("div");
  const imgEl = document.createElement("img");

  imageContainer.setAttribute("class", "image-container");
  imgEl.setAttribute("id", id);
  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", altText);

  imageContainer.append(imgEl);

  return imageContainer;
}; //Faccio l'esercizio 3 e 4 assieme così creo prima la funzione imageGenerator e poi direttamente renderizzo tutte le immagini della lista imageList

const imageList = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/200/200?random=6",
    altText: "Immagine 1",
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/200/200?random=10",
    altText: "Immagine 2",
  },
  {
    id: 3,
    imgUrl: "https://picsum.photos/200/200?random=9",
    altText: "Immagine 3",
  },
  {
    id: 4,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 4",
  },
  {
    id: 5,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 5",
  },
  {
    id: 6,
    imgUrl: "https://picsum.photos/200/200?random=3",
    altText: "Immagine 6",
  },
  {
    id: 7,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 7",
  },
  {
    id: 8,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 8",
  },
  {
    id: 9,
    imgUrl: "https://picsum.photos/200/200?random=2",
    altText: "Immagine 9",
  },
  {
    id: 10,
    imgUrl: "https://picsum.photos/200/200?random=1",
    altText: "Immagine 10",
  },
];

imageList.forEach((object) => {
  document.body.append(
    imageGenerator(object.id, object.imgUrl, object.altText)
  );
});
