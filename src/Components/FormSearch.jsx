import React, { useRef } from "react";
import { useGlobalContext } from "../Context";

const FormSearch = () => {
  const { setSearch } = useGlobalContext();
  const inputRef = useRef("");
  const inputChange = () => {
    // console.log(inputRef.current.value);
    setSearch(inputRef.current.value);
  };
  return (
    <>
      <section className="form__container">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search__name">Search Amazing Cocktails</label>
          <input
            type="text"
            name="name"
            id="search__name"
            placeholder="enter a cocktail name"
            ref={inputRef}
            onChange={inputChange}
          />
        </form>
      </section>
    </>
  );
};

export default FormSearch;
