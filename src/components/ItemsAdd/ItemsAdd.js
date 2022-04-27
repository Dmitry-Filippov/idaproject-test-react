import ItemsForm from "../ItemsForm/ItemsForm";
import "./ItemsAdd.css";

function ItemsAdd() {
  return (
    <section className="items-add">
      <h2 className="items-add__title">Добавление товара</h2>
      <ItemsForm />
    </section>
  );
}

export default ItemsAdd;
