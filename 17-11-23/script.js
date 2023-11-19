// Genero il contenuto principale del sito

const wrapperGenerator = () => {
  const wrapperEl = document.createElement("div");
  const titleEl = document.createElement("h1");
  const textEl = document.createElement("p");
  const imgEl = document.createElement("img");

  wrapperEl.className = "wrapper";
  titleEl.textContent = "Benvenuto nel mio sito";
  textEl.textContent =
    "(Spero che tu abbia veramente più di diciotto anni😊😊😊...)";
  imgEl.src =
    "https://fastly.picsum.photos/id/291/300/600.jpg?hmac=j0hg76Er25-0cnOd7MhIS_mr8BW_h0GWVLG40Lqf7dM";
  imgEl.alt = "immagine sito";

  wrapperEl.append(titleEl, textEl, imgEl);
  return wrapperEl;
};

document.body.appendChild(wrapperGenerator());

// Genero il popup

const createPopup = () => {
  const popupEl = document.createElement("div");
  const messageEl = document.createElement("p");
  const yesButtonEl = document.createElement("button");
  const noButtonEl = document.createElement("button");

  popupEl.className = "popup";
  messageEl.textContent = "Sei maggiorenne?????";
  yesButtonEl.textContent = "Si";
  noButtonEl.textContent = "No";

  yesButtonEl.addEventListener("click", () => {
    document.querySelector(".wrapper").style.visibility = "visible"; // Il wrapper diventa visibile quando si fa clic sul pulsante "Si"
    popupEl.remove();
  });
  noButtonEl.addEventListener("click", () => {
    window.location.href = "https://www.google.com"; // Questa proprietà reindirizza a Google quando si fa clic sul pulsante "No"
  });

  popupEl.append(messageEl, yesButtonEl, noButtonEl);
  return popupEl;
};

// Setto la visualizzazione del popup dopo 3,5 secondi

setTimeout(() => {
  document.querySelector(".wrapper").style.visibility = "hidden"; // Nasconde il wrapper prima di mostrare il popup
  document.body.appendChild(createPopup());
}, 3500);

// Esercizio 2

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const filteredProducts = data.products.filter(
      (product) => product.price < 50
    );
    console.log(filteredProducts);
  });
