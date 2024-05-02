import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Card, Container } from "@mui/material";
import Banner from "./components/banner/Banner";
import RecipeReviewCard from "./components/cards/Cards";
// import Products from "./components/products/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Banner />
        <RecipeReviewCard />
        {/* <Products /> */}
      </Container>
    </div>
  );
}

export default App;
