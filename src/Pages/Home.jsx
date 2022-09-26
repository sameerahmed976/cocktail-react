import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Home = () => {
  const inputRef = useRef("");
  const { setSearch, loading, cocktails } = useGlobalContext();

  const inputChange = () => {
    // console.log(inputRef.current.value);
    setSearch(inputRef.current.value);
  };

  if (loading) {
    return (
      <section className="loading__container">
        <h1 className="loading">Loading...</h1>
      </section>
    );
  }
  if (cocktails.length < 1) {
    return (
      <section className="not-found__Container">
        <h1 className="not-found">No match Found for your search input</h1>
      </section>
    );
  }

  return (
    <main>
      <section className="form__container">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search__name">
            Search Amazing Cocktails
            <input
              type="text"
              name="name"
              id="search__name"
              ref={inputRef}
              onChange={inputChange}
            />
          </label>
        </form>
      </section>

      <section>
        <section className="card__container">
          {cocktails.map(({ image, info, id, name, glass }) => {
            return (
              <article className="card" key={id}>
                <img src={image} alt="image__product" />
                <article className="content">
                  <h2>{name}</h2>
                  <h3>{glass}</h3>
                  <p>{info}</p>
                  <Link to={`/cocktails/${id}`}>Learn More</Link>
                </article>
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default Home;
