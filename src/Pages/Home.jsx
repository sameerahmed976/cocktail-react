import React from "react";
import Cocktails from "../Components/Cocktails";
import FormSearch from "../Components/FormSearch";
import Loading from "../Components/Loading";
import NotFound from "../Components/NotFound";
import { useGlobalContext } from "../Context";

const Home = () => {
  const { loading, cocktails } = useGlobalContext();

  // if (loading) {
  //   return <Loading />;
  // }
  if (cocktails.length < 1) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  return (
    <main>
      <FormSearch />
      {loading && <Loading />}
      <Cocktails />
    </main>
  );
};

export default Home;
