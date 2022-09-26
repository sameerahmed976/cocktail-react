import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import SingleCocktail from "./Pages/SingleCocktail";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/cocktails/:id" element={<SingleCocktail />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
