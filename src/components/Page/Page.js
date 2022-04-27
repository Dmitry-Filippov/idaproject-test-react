import ItemsAdd from "../ItemsAdd/ItemsAdd";
import ItemsCards from "../ItemsCards/ItemsCards";
import "./Page.css";

function Page() {
  return (
    <div className="page">
      <main className="content">
        <ItemsAdd />
        <ItemsCards />
      </main>
    </div>
  );
}

export default Page;
