import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Routes} from 'react-router-dom';
import RecipeList from "./Components/RecipeList";
import { observer } from "mobx-react";



function App() {
 
  return (
    <div>
    <NavBar />
    <Container>
    <Routes>
      <Route path="/" element ={<RecipeList />}/>
    </Routes>
    </Container>
  </div>
  );
}

export default observer(App);
