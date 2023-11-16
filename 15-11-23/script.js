// Funzione che genera un elemento nel DOM per un robot specifico

const roboGenerator = (roboData) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const textEl = document.createElement("div");
  const priceEl = document.createElement("p");
  const nameEl = document.createElement("h3");

  wrapperEl.className = "robo";
  imgEl.src = roboData.imageUrl;
  imgEl.alt = roboData.roboName;
  textEl.className = "text";
  priceEl.textContent = roboData.price + "$";
  nameEl.textContent = roboData.roboName;

  // Creazione del pulsante "favorito" e pulsante "acquista"

  const favButton = document.createElement("button");
  const buyButton = document.createElement("button");

  favButton.textContent = "🤍";
  favButton.addEventListener("click", () => {
    favButton.textContent = favButton.textContent === "🤍" ? "❤️" : "🤍"; // Ho usato l'operatore ternario che è simile all'"if...else",cambia il contenuto del testo del pulsante
  });
  buyButton.textContent = "🛒";
  buyButton.addEventListener("click", () => {
    alert(
      `Grazie per il tuo acquisto,hai scelto ${roboData.roboName} per la cifra di ${roboData.price}$!`
    );
  });

  textEl.append(priceEl, nameEl, favButton, buyButton);
  wrapperEl.append(imgEl, textEl);
  return wrapperEl;
};

// Lista dei dati dei robot

const roboList = [
  {
    id: 1,
    roboName: "Ale",
    price: 200,
    imageUrl: "https://robohash.org/Erling",
  },
  {
    id: 2,
    roboName: "Erling",
    price: 300,
    imageUrl: "https://robohash.org/Ale",
  },
  {
    id: 3,
    roboName: "Paulo",
    price: 400,
    imageUrl: "https://robohash.org/Paulo",
  },
  {
    id: 4,
    roboName: "Cristiano",
    price: 500,
    imageUrl: "https://robohash.org/Cristiano",
  },
];

// Creo la sezione principale

const sectionEl = document.createElement("div");
const titleEl = document.createElement("h2");

sectionEl.className = "robo-list";
titleEl.textContent = "Recommended For you";

// Generazione degli elementi DOM per ogni robot nella lista + aggiunta del costrutto per la gestione degli errori:"try e catch"

try {
  roboList.map((robo) => sectionEl.append(roboGenerator(robo)));
} catch (error) {
  console.error(
    "C'è stato un errore nella creazione degli elementi della tua pagina: ",
    error
  );
}

document.body.append(titleEl, sectionEl);

// Funzione che genera le icone

const iconGenerator = (iconData, iconContainer) => {
  const iconEl = document.createElement("img");

  iconEl.src = iconData.imageUrl;
  iconEl.alt = iconData.name;

  iconContainer.append(iconEl);
};

const icons = [
  { id: 1, name: "house icon", imageUrl: "asset/house-door-fill.svg" },
  { id: 2, name: "person icon", imageUrl: "asset/person-fill.svg" },
  { id: 3, name: "search icon", imageUrl: "asset/search.svg" },
];

const iconContainer = document.createElement("div");
iconContainer.className = "foot";

icons.forEach((icon) => iconGenerator(icon, iconContainer));

document.body.append(iconContainer);

// Creazione della barra di navigazione

const navBar = document.createElement("nav");
const logo = document.createElement("div");
const searchBox = document.createElement("input"); // Ho voluto creare una barra di navigazione con un logo e un input di ricerca

navBar.className = "nav-bar";
logo.className = "logo";
logo.textContent = "🤖🤖🤖🤖";
searchBox.type = "search";
searchBox.placeholder = "Cerca...";

navBar.appendChild(logo);
navBar.appendChild(searchBox);

document.body.prepend(navBar); // Questo codice aggiunge l'elemento navBar all'inizio del body,infatti ho utilizzato il metodo .prepend che è utilizzato per inserirlo all'inzio del contenuto di un elemento padre. Quindi navBar sarà il primo figlio del body
//  Se utilizzavo solamente document.body.append andava a finire alla fine del documento
