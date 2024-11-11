<<<<<<< HEAD
import "./App.css";
import Display from "./components/display";
import ButtonContainor from "./components/buttonContainor";
import Container from "./components/Container";
import { useState } from "react";
function App() {
  const [show, setShow] = useState("");
  const buttonOnClick = (value) => {
    if (value === "C") {
      setShow("");
    } else if (value === "=") {
      setShow(eval(show).toString());
    }else if(value==="x"){     
      setShow("project ongoing");
      
    } 
    else {
      setShow(show + value);
    }
    
  };

  return (
    <>
      <Container>
        <Display show={show}></Display>
        <ButtonContainor buttonOnClick={buttonOnClick}></ButtonContainor>
=======
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
>>>>>>> 9c7067e54477f0a139855746f299f5f17fb7900b
      </Container>
    </>
  );
}

export default App;
