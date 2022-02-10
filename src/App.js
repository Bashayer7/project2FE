import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import CreateNewCategory from "./Components/CreateNewCategory";
import CategoreisList from './Components/CategoreisList'
import { Button } from "react-bootstrap";

function App() {
const [open,setOpen]= useState(false)
  return(
  <div>
    <Button onClick={()=>setOpen(true)}> Create Category</Button>
   <CategoreisList/>
  <CreateNewCategory isOpen = {open}  closeModal ={()=>setOpen(false)}/>
  </div>)
}

export default App;
