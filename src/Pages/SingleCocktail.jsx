import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { useGlobalContext } from "../Context";

const SingleCocktail = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  console.log(id);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        console.log(
          "🚀 ~ file: SingleCocktail.jsx ~ line 40 ~ getData ~ ingredients",
          ingredients
        );
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktails(newCocktail);
      } else {
        setCocktails(null);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (loading) {
    return (
      <section className="loading__container">
        <h1 className="loading">Loading...</h1>
      </section>
    );
  }

  if (!cocktails) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktails;
    console.log(
      "🚀 ~ file: SingleCocktail.jsx ~ line 79 ~ SingleCocktail ~ ingredients",
      ingredients
    );
    return (
      <>
        <section className="single__container">
          <Link to="/" className="btn btn--back">
            back home
          </Link>

          <div className="single">
            <img src={image} alt={name}></img>
            <article className="single__card">
              <p>
                <span className="drink">name :</span> {name}
              </p>
              <p>
                <span className="drink">category :</span> {category}
              </p>
              <p>
                <span className="drink">info :</span> {info}
              </p>
              <p>
                <span className="drink">glass :</span> {glass}
              </p>
              <p>
                <span className="drink">instructions :</span> {instructions}
              </p>
              <p>
                <span className="drink">ingredients :</span>
                {ingredients?.map((item, index) => {
                  return item ? <span key={index}> {item}</span> : null;
                })}
              </p>
            </article>
          </div>
        </section>
      </>
    );
  }
};

export default SingleCocktail;
