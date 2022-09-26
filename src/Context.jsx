import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

const Context = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      setCocktails(data);
      // console.log(data);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        search,
        setSearch,
        cocktails,
        setCocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Context, useGlobalContext };
