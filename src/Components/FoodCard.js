import { Button, Card, Col } from "react-bootstrap";
import foodStore from "../stores/foodStore";
import FoodModal from "./FoodModal";
import FoodModalUpdate from "./FoodModalUpdate";

function FoodCard({ food }) {
  const handleDelete = () => foodStore.deleteFood(food._id);

  return (
    <Col className="col-lg-4 mx-auto">
      <Card>
        <Card.Img variant="top" src={food.image} alt={food.name} />
        <Card.Body>
          <Card.Title>{food.name}</Card.Title>
          <Button className="m-1" onClick={handleDelete} variant="danger">
            DELETE
          </Button>
          <FoodModal oldFood={food} />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default FoodCard;