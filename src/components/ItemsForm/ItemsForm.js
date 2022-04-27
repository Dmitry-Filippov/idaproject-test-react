import React from "react";
import "./ItemsForm.css";

function ItemsForm() {
  const [name, setName] = React.useState(null);
  const [about, setAbout] = React.useState(null);
  const [link, setLink] = React.useState(null);
  const [price, setPrice] = React.useState(null);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleAboutChange(e) {
    setAbout(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }
  function handlePriceChange(e) {
    setPrice(e.target.value);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("You've found Easter Egg :)");
  }

  return (
    <form className="items-add__form" onSubmit={handleFormSubmit}>
      <span className="items-add__span items-add__span_type_name">
        Наименование товара
        <div className="items-add__required"></div>
      </span>
      <input
        className="items-add__input items-add__input_type_name"
        required
        type="text"
        placeholder="Введите наименование товара"
        value={name}
        onChange={handleNameChange}
      />
      <span className="items-add__span items-add__span_type_about">
        Описание товара
      </span>
      <input
        className="items-add__input items-add__input_type_about"
        type="text"
        placeholder="Введите описание товара"
        value={about}
        onChange={handleAboutChange}
      />
      <span className="items-add__span items-add__span_type_link">
        Ссылка на изображение товара
        <div className="items-add__required"></div>
      </span>
      <input
        className="items-add__input items-add__input_type_link"
        type="url"
        required
        placeholder="Введите ссылку"
        value={link}
        onChange={handleLinkChange}
      />
      <span className="items-add__span items-add__span_type_price">
        Цена товара
        <div className="items-add__required"></div>
      </span>
      <input
        className="items-add__input items-add__input_type_price"
        required
        type="number"
        placeholder="Введите цену"
        value={price}
        onChange={handlePriceChange}
      />
      <button className="items-add__button" type="submit">
        Добавить товар
      </button>
    </form>
  );
}

export default ItemsForm;
