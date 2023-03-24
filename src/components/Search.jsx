import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearched } from "../redux/pizzasDisplaySlice";

function Search() {
  //REDUX
  let dispatch = useDispatch();
  let searched = useSelector((state) => state.pizzasSlice.searched);

  return (
    <>
      <input
        value={searched}
        onChange={(event) => dispatch(setSearched(event.target.value))}
      ></input>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Cross_red_circle.svg"
        width="25"
        height="25"
        onClick={() => dispatch(setSearched(""))}
      ></img>
    </>
  );
}

export default Search;
