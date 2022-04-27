import "./ItemsCards.css";
import defaultCards from "../../cardsList";
import CardItem from "../CardItem/CardItem";

function ItemsCards() {
  return (
    <section className="items-cards">
      <button className="items-cards__select">
        По умолчанию
        <div className="items-cards__select-cursor"></div>
      </button>
      <div class="items-cards__wrapper">
        {defaultCards.map((card) => {
          return (
            <CardItem
              name={card.name}
              about={card.about}
              link={card.link}
              price={card.price}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ItemsCards;
