import { httpGET } from "./http.js";

const headerGenerator = () => {
  const headerEl = document.createElement("header");
  const logoEl = document.createElement("div");
  const menuImgEl = document.createElement("img");
  const logoAccountEl = document.createElement("div");
  const profileImgEl = document.createElement("img");
  const profileTextEl = document.createElement("h3");
  const navEl = document.createElement("nav");
  const sidebarCloseEl = document.createElement("div");
  const closeEl = document.createElement("p");
  const ulEl = document.createElement("ul");

  logoEl.className = "logo";
  menuImgEl.src = "./assets/menu_FILL0_wght400_GRAD0_opsz24.svg";
  menuImgEl.alt = "menu";
  logoAccountEl.className = "logo-account";
  profileImgEl.src = "./assets/account_circle_FILL0_wght400_GRAD0_opsz24.svg";
  profileImgEl.alt = "profile";
  profileTextEl.textContent = "Profile";
  navEl.className = "sidebar";
  sidebarCloseEl.className = "sidebar-close";
  closeEl.textContent = "X";

  const liItemsEl = ["Home", "Enabled Users", "Users not Enabled"];

  liItemsEl.forEach((item) => {
    const liEl = document.createElement("li");
    const aEl = document.createElement("a");

    if (item === "Home") {
      aEl.href = "#";
    } else {
      aEl.href = `#${item}`; // Ho aggiunto un'istruzione if/else così controlla se il link è "Home",così da andare all'inzio della pagina,altrimenti va nella sezione con l'id corrispondente
    }
    aEl.textContent = item;

    liEl.appendChild(aEl);
    ulEl.appendChild(liEl);
  });

  sidebarCloseEl.appendChild(closeEl);
  navEl.append(sidebarCloseEl, ulEl);
  logoAccountEl.append(profileImgEl, profileTextEl);
  logoEl.append(menuImgEl, logoAccountEl);
  headerEl.append(logoEl, navEl);

  menuImgEl.addEventListener("click", () => {
    navEl.classList.add("sidebar-open");
  });

  closeEl.addEventListener("click", () => {
    navEl.classList.remove("sidebar-open");
  });

  ulEl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navEl.classList.remove("sidebar-open");
    });
  });

  return headerEl;
};

const titleGenerator = () => {
  const titleEl = document.createElement("div");
  const titleTextEl = document.createElement("h1");
  const titleImgEl = document.createElement("img");

  titleEl.className = "title";
  titleTextEl.textContent = "ARCHIVE";
  titleImgEl.src = "./assets/trianglify-lowres.png";
  titleImgEl.alt = "image";

  titleEl.append(titleTextEl, titleImgEl);

  return titleEl;
};

const usersTitleGenerator = (title) => {
  const usersTitleEl = document.createElement("div");
  const usersTitleTextEl = document.createElement("h2");

  usersTitleEl.className = "users1-title";
  usersTitleTextEl.textContent = title;

  usersTitleEl.appendChild(usersTitleTextEl);

  return usersTitleEl;
};

const userCardGenerator = (userData) => {
  const cardContainerEl = document.createElement("div");
  const imgContainerEl = document.createElement("div");
  const userImgEl = document.createElement("img");
  const textContainerEl = document.createElement("div");
  const contentTextEl = document.createElement("div");
  const contentDataEl = document.createElement("div");

  cardContainerEl.className = "users1-content";
  imgContainerEl.className = "users1-image";
  userImgEl.src =
    "./assets/profile-icon-isolated-white-on-600nw-211470211.webp";
  userImgEl.alt = "profile";
  textContainerEl.className = "users1-text";
  contentTextEl.className = "users1-content-text";
  contentDataEl.className = "users1-content-data";

  const labelsEl = ["Name", "Username", "Email", "Address", "Phone"];

  labelsEl.forEach((label) => {
    const pEl = document.createElement("p");

    pEl.textContent = label;

    contentTextEl.appendChild(pEl);
  });

  const valuesEl = [
    userData.name,
    userData.username,
    userData.email,
    userData.address.street,
    userData.phone,
  ];
  valuesEl.forEach((value) => {
    const pEl = document.createElement("p");

    pEl.textContent = value;

    contentDataEl.appendChild(pEl);
  });

  imgContainerEl.appendChild(userImgEl);
  textContainerEl.append(contentTextEl, contentDataEl);
  cardContainerEl.append(imgContainerEl, textContainerEl);

  return cardContainerEl;
};

const mainSectionGenerator = async () => {
  const userDataListEl = await httpGET();
  const enabledUsersSectionEl = document.createElement("section");
  const enabledUsersContainerEl = document.createElement("div");
  const usersNotEnabledSectionEl = document.createElement("section");
  const usersNotEnabledContainerEl = document.createElement("div");
  const mainSectionEl = document.createElement("main");
  const sectionContainerFirstEl = document.createElement("div");
  const sectionContainerSecondEl = document.createElement("div");

  enabledUsersSectionEl.id = "Enabled Users";
  enabledUsersContainerEl.className = "users1-container";
  usersNotEnabledSectionEl.id = "Users not Enabled";
  usersNotEnabledContainerEl.className = "users1-container";
  sectionContainerFirstEl.className = "users1";
  sectionContainerSecondEl.className = "users1";

  userDataListEl.forEach((userData) => {
    if (userData.active) {
      enabledUsersContainerEl.appendChild(userCardGenerator(userData));
    } else {
      usersNotEnabledContainerEl.appendChild(userCardGenerator(userData));
    }
  });

  enabledUsersSectionEl.append(
    usersTitleGenerator("Enabled Users"),
    enabledUsersContainerEl
  );
  usersNotEnabledSectionEl.append(
    usersTitleGenerator("Users not Enabled"),
    usersNotEnabledContainerEl
  );

  sectionContainerFirstEl.appendChild(enabledUsersSectionEl);
  sectionContainerSecondEl.appendChild(usersNotEnabledSectionEl);
  mainSectionEl.append(sectionContainerFirstEl, sectionContainerSecondEl);

  return mainSectionEl;
};

export { headerGenerator, titleGenerator, mainSectionGenerator };
