import {
  headerGenerator,
  titleGenerator,
  mainSectionGenerator,
} from "./modules/component.js";

const bodyEl = document.querySelector("body");
const mainHeaderEl = headerGenerator();
const mainTitleEl = titleGenerator();
const mainSectionEl = await mainSectionGenerator(); // Aspetto che la funzione asincrona "mainSectionGenerator" risolva la promise che contiene,per poi assegnare il valore a "mainSectionEl",altrimenti il valore di "mainSectionEl" sarebbe una promise

bodyEl.append(mainHeaderEl, mainTitleEl, mainSectionEl);
