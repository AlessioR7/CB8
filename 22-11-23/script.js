// ESERCIZIO 1

const getImages = async () => {
  const res = await fetch("https://picsum.photos/v2/list");
  const data = await res.json();

  return data.map((image) => console.log(image.download_url));
};

getImages();

// ESERCIZIO 2

const wrapperGenerator = (object) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const textEl = document.createElement("h3");

  wrapperEl.className = "wrapper";
  imgEl.src = object.download_url;
  imgEl.alt = "image";
  textEl.textContent = object.author;

  wrapperEl.append(imgEl, textEl);

  return wrapperEl;
};

const list = {
  id: "0",
  author: "Alejandro Escamilla",
  download_url: "https://picsum.photos/id/0/5000/3333",
};

document.body.appendChild(wrapperGenerator(list));

// ESERCIZIO 3

const renderImages = async () => {
  const res = await fetch("https://picsum.photos/v2/list");
  const data = await res.json();

  return data.map((image) => {
    const wrapper = wrapperGenerator(image);

    document.body.appendChild(wrapper);
  });
};

renderImages();
