import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import foodStore from "../stores/foodStore";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import SignInModal from "./SignInModal";


function Foodiez({ foodiez }) {

const handleDelete = () => {
  foodStore.deleteFood(foodiez._id);}

const [closeModal, setIsOpen] = useState(false);


  return (

    <Col sm={12} md={6} lg={4} >
      
      <Card className="cardClass my-4 p-4 rounded h-90">
        <Card.Img
          className="card-image"
          style={{ objectFit: "contain" }}
          variant="top"
          src={food.image}
        />
        <Card.Body>
          <Card.Title><strong>Name:</strong> {food.name}</Card.Title>

          <Card.Subtitle className="mb-2 text-muted">Info</Card.Subtitle>
          
          
          { authStore.user ?
          (<Link to={`/foods/${food.slug}`}>
           <Button style={{ borderRadius: "20px", marginBottom: "7px" }}
              className="w-100 align-item-center"
              variant="primary" >
          Recipes
          </Button>
          </Link>)
          :
          <div><h5> <SignInModal /> to see the Details</h5>
          </div>}

         
          { authStore.user &&
          <Button style={{ borderRadius: "20px", marginBottom: "7px" }}
              className="w-100 align-item-center"
              variant="primary"  onClick={handleDelete}> Delete</Button> } 
        
        
        &nbsp;

        </Card.Body>
      </Card>
    </Col>
  );
}

export default observer(Foodiez);
