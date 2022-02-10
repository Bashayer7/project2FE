import React from "react";
import { Button, Nav } from "react-bootstrap";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import RecipeModal from "./RecipeModal";

function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {authStore.user ?  authStore.user.username : ""}
      {authStore.user ? (
        <>
        <div>
          <Link to={"/"}>
            <Button>Home</Button>
          </Link>
         
          <Button onClick={authStore.signout}>SignOut</Button>
          </div>
    </>
      ) : ( 
        <>
        <Link to="/">
           Home
          </Link>
          <SignUpModal />
          <SignInModal />  
          <RecipeModal/>
        </>
      )}
    </Nav>
  );
}

export default observer(Navbar);
