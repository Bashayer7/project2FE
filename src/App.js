import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react";

function App() {

  return (
    <div>
      <NavBar/>
      <div className="__main">
        <div className="main__chatbody"></div>
      </div>
      <Container>
        <Routes>
          <Route path="/" Home/>
        </Routes>
      </Container>
    </div>
  );
}
export default observer(App);
