import Card from "../card/Card";
import "./index.css";

const CardList = ({ cardListObj, id }) => {
  // Aggiungo un id univoco per la lista di carte che poi sarà utilizzando nella funzione scroll per identificare l'elemnto da fare scorrere,altrimenti se non si utilizza,cliccando i pulsanti e utilizzando il queryselector attraverso la classe,verrà spostata solamente la prima lista
  const scroll = (direction) => {
    // Creo una funzione scroll che accetta un parametro direction;se direction è "left" la lista si sposterà in negativo di 120 px e quindi a sinistra,altrimenti se direction è "right" la lista scorrerà a destra
    const scrollDistance = (direction === "left" ? -1 : 1) * 120;
    const containerItems = document.querySelector(`#${id}`);
    containerItems.scrollLeft += scrollDistance; // Aggiorna la posizione di scorrimento dell'elemnto,in questo caso "containerItems", in base alla distanza calcolata
  };

  return (
    <div className="CardList">
      <h2>{cardListObj.title}</h2>
      <div className="CardList__scroll">
        <button onClick={() => scroll("left")}>
          <span>⬅️</span>
        </button>
        <div className="CardList__items" id={id}>
          {cardListObj.list.map((image) => (
            <Card cardObj={image} key={image.id} />
          ))}
        </div>
        <button onClick={() => scroll("right")}>
          <span>➡️</span>
        </button>
      </div>
    </div>
  );
};

export default CardList;
