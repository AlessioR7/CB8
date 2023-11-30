const createNavbar = () => {
  const navbar = document.createElement("div");
  const logo = document.createElement("div");
  const img = document.createElement("img");
  const menu = document.createElement("div");
  const sign = document.createElement("div");
  const button = document.createElement("button");

  navbar.className = "navbar";
  logo.className = "navbar-logo";
  img.src = "./asset/undraw_cat_epte.svg";
  img.alt = "logo";
  menu.className = "navbar-menu";
  sign.className = "navbar-sign";
  sign.textContent = "Sign Up";
  button.textContent = "Order now";

  logo.appendChild(img);

  ["Home", "About", "Shop", "Pages", "Contact"].forEach((text) => {
    const a = document.createElement("a");

    a.href = "#";
    a.textContent = text;

    menu.appendChild(a);
  });

  sign.appendChild(button);

  [logo, menu, sign].forEach((el) => navbar.appendChild(el));

  return navbar;
};

const createHero = () => {
  const hero = document.createElement("div");
  const text = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const em = document.createElement("em");
  const button = document.createElement("button");
  const image = document.createElement("div");
  const img = document.createElement("img");

  hero.className = "hero";
  text.className = "hero-text";
  h1.textContent = "Lorem ipsum dolor sit amet.";
  em.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum blanditiis eligendi enim consequuntur earum.";
  button.textContent = "GET STARTED";
  image.className = "hero-image";
  img.src = "./asset/undraw_website_7org.svg";
  img.alt = "hero-image";

  p.appendChild(em);

  [h1, p, button].forEach((el) => text.appendChild(el));

  image.appendChild(img);

  [text, image].forEach((el) => hero.appendChild(el));

  return hero;
};

const createSection = () => {
  const section = document.createElement("div");
  const text = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const images = document.createElement("div");

  section.className = "section";
  text.className = "section-text";
  h2.textContent = "Lorem ipsum dolor sit.";
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam.";
  images.className = "section-images";

  text.appendChild(h2);
  text.appendChild(p);
  section.appendChild(text);

  [
    "./asset/undraw_walking_in_rain_vo9p.svg",
    "./asset/undraw_calling_mcgf.svg",
    "./asset/undraw_undraw_undraw_undraw_watch_notification_8mf3_-1-_rq1y_-1-_ifk0_-1-_m38m.svg",
  ].forEach((src, i) => {
    const imageDiv = document.createElement("div");
    const img = document.createElement("img");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

    imageDiv.className = "section-images-1";
    img.src = src;
    img.alt = ["rain", "calling", "notification"][i];
    h4.textContent = "Lorem, ipsum.";
    p.textContent =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ipsum omnis asperiores dolorem veritatis commodi atque?";

    [img, h4, p].forEach((el) => imageDiv.appendChild(el));

    images.appendChild(imageDiv);
  });

  section.appendChild(images);

  return section;
};

const createSection2 = () => {
  const section2 = document.createElement("div");
  const imageDiv = document.createElement("div");
  const img = document.createElement("img");
  const textDiv = document.createElement("div");
  const h3 = document.createElement("h3");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const button = document.createElement("button");

  section2.className = "section2";
  imageDiv.className = "section2-image";
  img.src = "./asset/undraw_pancakes_238t.svg";
  img.alt = "section image";
  textDiv.className = "section2-text";
  h3.textContent = "Lorem, ipsum.";
  p1.textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi non, tempora necessitatibus neque reprehenderit excepturi doloremque ea ratione cumque esse.";
  p2.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae eaque in inventore atque fuga magnam? Quo, reiciendis?";
  button.textContent = "READ MORE";

  imageDiv.appendChild(img);

  [h3, p1, p2, button].forEach((el) => textDiv.appendChild(el));
  [imageDiv, textDiv].forEach((el) => section2.appendChild(el));

  return section2;
};

const createSection2Phrase = () => {
  const section2Phrase = document.createElement("div");
  const h2 = document.createElement("h2");

  section2Phrase.className = "section2-phrase";
  h2.textContent = "We're trusted by clients.";

  section2Phrase.appendChild(h2);

  return section2Phrase;
};

const createSection2Alternate = () => {
  const section2 = document.createElement("div");
  const textDiv = document.createElement("div");
  const h3 = document.createElement("h3");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const button = document.createElement("button");
  const imageDiv = document.createElement("div");
  const img = document.createElement("img");

  section2.className = "section2";
  textDiv.className = "section2-text";
  h3.textContent = "Personal Gifting";
  p1.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor necessitatibus quis optio. Tenetur, dolorum provident?";
  p2.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, blanditiis!";
  button.textContent = "LEARN MORE";
  imageDiv.className = "section2-image";
  img.src = "./asset/undraw_calculator_re_alsc.svg";
  img.alt = "calculator";

  [h3, p1, p2, button].forEach((el) => textDiv.appendChild(el));

  imageDiv.appendChild(img);

  [textDiv, imageDiv].forEach((el) => section2.appendChild(el));

  return section2;
};

const createBlogSection = () => {
  const section = document.createElement("div");
  const textDiv = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const imagesDiv = document.createElement("div");

  section.className = "section";
  textDiv.className = "section-text";
  h2.textContent = "Our Blog";
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam.";
  imagesDiv.className = "section-images";

  [h2, p].forEach((el) => textDiv.appendChild(el));

  section.appendChild(textDiv);

  ["./asset/picsum1.jpg", "./asset/picsum2.jpg", "./asset/picsum3.jpg"].forEach(
    (src, i) => {
      const imageDiv = document.createElement("div");
      const img = document.createElement("img");
      const h4 = document.createElement("h4");
      const p = document.createElement("p");
      const a = document.createElement("a");

      imageDiv.className = "section-images-1";
      img.src = src;
      img.alt = `image${i + 1}`;
      h4.textContent = "Lorem, ipsum.";
      p.textContent =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ipsum omnis asperiores dolorem veritatis commodi atque?";
      a.href = "#";
      a.textContent = "Read More >>>>";

      [img, h4, p, a].forEach((el) => imageDiv.appendChild(el));

      imagesDiv.appendChild(imageDiv);
    }
  );

  section.appendChild(imagesDiv);

  return section;
};

const createContactSection = () => {
  const contact = document.createElement("div");
  const textDiv = document.createElement("div");
  const h2 = document.createElement("h2");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const submitDiv = document.createElement("div");
  const firstNameInput = document.createElement("input");
  const lastNameInput = document.createElement("input");
  const emailInput = document.createElement("input");
  const subjectInput = document.createElement("input");
  const messageInput = document.createElement("input");
  const button = document.createElement("button");

  contact.className = "contact";
  textDiv.className = "contact-text";
  h2.textContent = "Contact Us";
  p1.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis animi eligendi accusamus. Exercitationem nisi provident aut excepturi non incidunt possimus neque quae, fugit quo consequatur illo voluptatibus, qui, in et.";
  p2.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat inventore minima non libero! Corrupti itaque possimus voluptate animi quam! Illum, sunt. Blanditiis adipisci excepturi distinctio esse fugit modi illo.";
  submitDiv.className = "contact-submit";
  firstNameInput.type = "text";
  firstNameInput.placeholder = "First Name";
  lastNameInput.type = "text";
  lastNameInput.placeholder = "Last Name";
  emailInput.type = "text";
  emailInput.placeholder = "Email";
  subjectInput.type = "text";
  subjectInput.placeholder = "Subject";
  messageInput.type = "text";
  messageInput.id = "message";
  messageInput.placeholder = "Your Message...";
  button.textContent = "Submit";

  [h2, p1, p2].forEach((el) => textDiv.appendChild(el));

  [
    firstNameInput,
    lastNameInput,
    emailInput,
    subjectInput,
    messageInput,
    button,
  ].forEach((el) => submitDiv.appendChild(el));

  [textDiv, submitDiv].forEach((el) => contact.appendChild(el));

  return contact;
};

const createFooter = () => {
  const footer = document.createElement("div");
  const logoDiv = document.createElement("div");
  const img = document.createElement("img");
  const p = document.createElement("p");

  const infoDivs = ["Company", "Partner", "Help", "Newsletter"].map((title) => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");

    h3.textContent = title;

    div.appendChild(h3);

    return div;
  });

  const infoLists = [
    ["Blog", "About Us", "Download", "We're Hiring"],
    ["Sell on Gifting", "Corporate Gifting", "Press"],
    ["Contact Us", "Shipping + Returns", "FAQ"],
    ["Lorem, ipsum dolor sit amet consectetur adipisicing."],
  ];

  const emailInput = document.createElement("input");

  footer.className = "footer";
  logoDiv.className = "footer-logo";
  img.src = "./asset/undraw_cat_epte.svg";
  img.alt = "logo";
  p.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores earum expedita voluptates? Voluptatum numquam voluptate vitae, nam error placeat dicta?";
  infoDivs.forEach((div, i) => (div.className = "footer-info"));
  emailInput.type = "text";
  emailInput.placeholder = "Your Email.";

  logoDiv.appendChild(img);
  logoDiv.appendChild(p);
  footer.appendChild(logoDiv);

  infoDivs.forEach((div, i) => {
    infoLists[i].forEach((text) => {
      const p = document.createElement("p");

      p.textContent = text;

      div.appendChild(p);
    });

    footer.appendChild(div);
  });

  infoDivs[3].appendChild(emailInput);

  return footer;
};

document.body.appendChild(createNavbar());
document.body.appendChild(createHero());
document.body.appendChild(createSection());
document.body.appendChild(createSection2());
document.body.appendChild(createSection2Phrase());
document.body.appendChild(createSection2Alternate());
document.body.appendChild(createBlogSection());
document.body.appendChild(createContactSection());
document.body.appendChild(createFooter());
