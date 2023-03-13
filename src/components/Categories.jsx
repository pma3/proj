import { useDispatch, useSelector } from "react-redux";
import { setCategoryID } from "../redux/pizzasDisplaySlice";

function Categories() {
  //REDUX LOGIC
  let dispatch = useDispatch();
  let categoryID = useSelector((state) => state.pizzasSlice.categoryID);

  //CATEGORIES
  let categoriesList = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((item, i) => (
          <li
            className={categoryID === i ? "active" : ""}
            onClick={() => dispatch(setCategoryID(i))}
            key={i}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
