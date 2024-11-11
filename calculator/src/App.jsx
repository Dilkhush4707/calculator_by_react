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
      </Container>
    </>
  );
}

export default App;
