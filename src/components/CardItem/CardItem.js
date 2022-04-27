import "./CardItem.css";
import deleteButton from "../../vendor/images/delete 1.svg"

function CardItem(props) {
  return (
    <div className="items-cards__item">
      <img className="items-cards__img" src={props.link} alt="фото товара" />
      <h3 className="items-cards__title">{props.name}</h3>
      <p className="items-cards__about">{props.about}</p>
      <p className="items-cards__price">{props.price + " руб."}</p>
      <button class="items-cards__del">
        <img
          className="items-cards__garbage"
          src={deleteButton}
          alt="иконка удаления"
        />
      </button>
    </div>
  );
}

export default CardItem;
