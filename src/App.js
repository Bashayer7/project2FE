import logo from "./logo.svg";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="hh">
      <h3>category</h3>
      <div className="catg">
        <form action="http://localhost:8000/api/category">
          <label for="catg">Choose a category : </label>
          <select name="catgo" id="category">
            <option value="categoryId">BreakFast</option>
            <option value="categoryId">Lunch</option>
            <option value="categoryId">Dinner</option>
            <option value="categoryId">Drinks</option>
          </select>
          <br></br>
          <div className="btn">
            <button type="submit">Submit</button>
            <button type="create">Create</button>
          </div>

          {/* <input type="submit" value="Submit"> */}
        </form>
      </div>
    </div>
  );
}

export default App;
