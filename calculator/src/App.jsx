import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Display from "./components/display";
import ButtonContainor from "./buttonContainor";
import Container from "./Container";
function App() {
  return (
    <>
      <Container>
        <Display></Display>
        <ButtonContainor></ButtonContainor>
      </Container>
    </>
  );
}

export default App;
