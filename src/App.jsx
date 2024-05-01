import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Container } from "@mui/material";
import Banner from "./components/banner/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Banner />
      </Container>
    </div>
  );
}

export default App;
