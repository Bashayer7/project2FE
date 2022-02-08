import Card from "./ProductCard";
import { useState } from "react";
import FoodModal from "./FoodModal";
import { observer } from "mobx-react";
import foodStore from "../stores/foodStore";
import { Button, Form, Row, Stack } from "react-bootstrap";

function FoodList() {
  const [query, setQuery] = useState("");

  const foodList = foodStore.foods
    .filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((food) => <Card key={food._id} food={food} />);

  return (
    <div>
      <h1 className="title">Foods</h1>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="m-2"
          placeholder="Search for Food by name"
          onChange={(event) => setQuery(event.target.value)}
        />
        <FoodModal />
      </Stack>

      <Row>{foodList}</Row>
    </div>
  );
}

export default observer(FoodList);