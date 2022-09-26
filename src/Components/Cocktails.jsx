import React from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

const Cocktails = () => {
  const { cocktails } = useGlobalContext();
  return (
    <>
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
                  <Link to={`/cocktails/${id}`} className="btn btn--learn">
                    Learn More
                  </Link>
                </article>
              </article>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Cocktails;
