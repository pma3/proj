import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  //OBTAINING REDUX STATES
  let categoryID = useSelector((state) => state.pizzasSlice.categoryID);
  let sortType = useSelector((state) => state.pizzasSlice.sortType);
  let searched = useSelector((state) => state.pizzasSlice.searched);

  //FILTERING LOGIC
  let [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://63fcd8a0859df29986c5fc91.mockapi.io/items?${
          categoryID ? `category=${categoryID}` : ""
        }${
          sortType
            ? `&sortBy=${sortType.sortType.replace("-", "")}&order=${
                sortType.sortType.includes("-") ? "desc" : "asc"
              }`
            : ""
        }${searched ? `&search=${searched}` : ""}`
      )
      .then((res) => setItems(res.data));
  }, [categoryID, sortType, searched]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj, index) => (
              <PizzaBlock {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
