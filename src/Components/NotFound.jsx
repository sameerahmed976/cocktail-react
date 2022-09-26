import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="not-found__Container">
        <h1 className="not-found">No match Found for your search input</h1>
        <a href="/" className="btn btn--back">
          back home
        </a>
      </section>
    </>
  );
};

export default NotFound;
