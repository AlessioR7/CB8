import { httpGET } from "./modules/http.js";
import {
  cardElGen,
  cardsListElGen,
  listsContainerElGen,
} from "./modules/components.js";

const asyncListContainerElGen = async (endpoint, title) => {
  const data = await httpGET(endpoint);
  const listContainerEl = listsContainerElGen(title);
  const cardsListEl = cardsListElGen();

  data.results.map((serie) => cardsListEl.append(cardElGen(serie)));
  listContainerEl.append(cardsListEl);

  return listContainerEl;
};

const mainSectionEl = document.querySelector(".main");

// 1 STEP
// httpGET("/tv/top_rated").then((data) => {
//   const listContainerEl = listsContainerElGen("Top Rated");
//   const cardsListEl = cardsListElGen();

//   data.results.map((serie) => cardsListEl.append(cardElGen(serie)));

//   listContainerEl.append(cardsListEl);
//   mainSectionEl.append(listContainerEl);
// });

// httpGET("/tv/popular").then((data) => {
//   const listContainerEl = listsContainerElGen("Popular");
//   const cardsListEl = cardsListElGen();

//   data.results.map((serie) => cardsListEl.append(cardElGen(serie)));

//   listContainerEl.append(cardsListEl);
//   mainSectionEl.append(listContainerEl);
// });

// 2 STEP
// asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming").then(
//   (element) => mainSectionEl.append(element)
// );

// asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing").then(
//   (element) => mainSectionEl.append(element)
// );

// asyncListContainerElGen("/tv/top_rated", "Serie Tv - Top Rated").then(
//   (element) => mainSectionEl.append(element)
// );
// asyncListContainerElGen("/tv/popular", "Serie Tv - Popular").then((element) =>
//   mainSectionEl.append(element)
// );

// 3 STEP
Promise.all([
  asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming"),
  asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing"),
  asyncListContainerElGen("/tv/top_rated", "Serie Tv - Top Rated"),
  asyncListContainerElGen("/tv/popular", "Serie Tv - Popular"),
]).then((elements) => elements.map((el) => mainSectionEl.append(el)));

// Creazione della navbar dinamicamente

const createNavbar = () => {
  const navbarEl = document.createElement("nav");
  const searcDivEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const inputEl = document.createElement("input");
  const linksDivEl = document.createElement("div");
  const ulEl = document.createElement("ul");
  const li1El = document.createElement("li");
  const li2El = document.createElement("li");
  const labelEl = document.createElement("label");
  const selectEl = document.createElement("select");
  const optionEl = document.createElement("option");

  navbarEl.className = "navbar";
  searcDivEl.className = "search";
  imgEl.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
  imgEl.alt = "netflix-clone-logo";
  inputEl.type = "text";
  inputEl.placeholder = "Search";
  linksDivEl.className = "links";
  ulEl.className = "links-list";
  li1El.textContent = "TV Shows";
  li2El.textContent = "Movies";
  labelEl.for = "categories";
  labelEl.textContent = "Categories";
  selectEl.name = "categories";
  selectEl.id = "categories";
  optionEl.value = "";

  selectEl.appendChild(optionEl);
  ulEl.append(li1El, li2El, labelEl, selectEl);
  linksDivEl.appendChild(ulEl);
  searcDivEl.append(imgEl, inputEl);
  navbarEl.append(searcDivEl, linksDivEl);

  return navbarEl;
};

// Creazione della modale

const createModal = async () => {
  const modalEl = document.createElement("div");
  const contentEl = document.createElement("div");
  const titleEl = document.createElement("h2");
  const imgEl = document.createElement("img");
  const buttonEl = document.createElement("button");

  modalEl.className = "modal";
  contentEl.className = "modal-content";
  titleEl.textContent = "50% discount on the latest release";

  const data = await httpGET("/movie/upcoming");
  const firstMovie = data.results[0];

  imgEl.src = `https://image.tmdb.org/t/p/w500${firstMovie.poster_path}`;
  imgEl.alt = firstMovie.title;

  buttonEl.textContent = "CLOSE";

  contentEl.append(titleEl, imgEl, buttonEl);
  modalEl.appendChild(contentEl);

  buttonEl.addEventListener("click", () => {
    modalEl.style.display = "none";
  });

  return modalEl;
};

document.body.prepend(createNavbar());

createModal().then((modalEl) => {
  document.body.prepend(modalEl);
});
