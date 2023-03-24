import { debounce } from "lodash";
import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearched } from "../redux/pizzasDisplaySlice";

function Search() {
  //REDUX
  let dispatch = useDispatch();
  let searched = useSelector((state) => state.pizzasSlice.searched);

  //INPUT & DEBOUNCE LOGIC
  let [searchValue, setSearchValue] = useState("");
  let setSearchedDebounce = useCallback(
    debounce((value) => dispatch(setSearched(value)), 1000),
    []
  );

  let onChangeLogic = (event) => {
    setSearchValue(event.target.value);
    setSearchedDebounce(event.target.value);
  };

  let onClickCross = () => {
    setSearchValue("");
    dispatch(setSearched(""));
    input_ref.current.focus();
  };

  let input_ref = useRef();

  return (
    <>
      <input
        ref={input_ref}
        value={searchValue}
        onChange={onChangeLogic}
      ></input>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Cross_red_circle.svg"
        width="25"
        height="25"
        onClick={onClickCross}
      ></img>
    </>
  );
}

export default Search;
