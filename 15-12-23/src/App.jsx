import CardList from "./components/cardList/CardList";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import "./App.css";

function App() {
  const imagesList1 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?1",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?2",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?3",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?4",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?5",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?6",
      title: "Image card",
    },
  ];
  const imagesList2 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?10",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?21",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?31",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?41",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?51",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?61",
      title: "Image card",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero
        imageUrl="https://static.vecteezy.com/ti/foto-gratuito/p2/22466519-natura-sfondo-sfondo-natura-digitale-la-pittura-colorato-natura-ai-sfondo-gratuito-foto.jpg"
        title="Welcome to our Gallery😊"
      />
      <CardList
        id="cardList1"
        cardListObj={{ title: "Indie movies ecc...", list: imagesList1 }}
      />
      <CardList
        id="cardList2"
        cardListObj={{ title: "Fantasy", list: imagesList2 }}
      />
      <Footer />
    </div>
  );
}

export default App;
