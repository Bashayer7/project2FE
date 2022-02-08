import { makeAutoObservable } from "mobx";
import api from "./api";

class FoodStore {
  constructor() {
    makeAutoObservable(this);
  }
  foods = [];

  createFood = async (newFood) => {
    const formData = new FormData()
    for(const key in newFood) formData.append(key, newFood[key]);
    try {
      const response = await api.post("/Foods", formData);
      this.Foods.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchFood = async () => {
    try {
        const response = await api.get('/Food');
        this.food = response.data;
        this.loading = false;
    }
    catch(error) {} 
};

  updateFood = async (updatedFood, foodId) => {
    try {
      const formData = new FormData();
      for (const key in updatedFood)
      formData.append(key, updatedFood[key]);
      const res = await api.put(`/foods/${foodId}`, formData);
      this.foods = this.foods.map((e) =>
      e.id === res.data.id ? (e = res.data) : e
      );
    } catch (error) {
      console.log("FoodStore -> updateFood -> error", error);
    }
  };

  deleteFood = async (foodId) => {
    try {
      await api.delete(`/foods/${foodId}`);
      this.foods = this.foods.filter(
        (food) => food._id !== foodId
      );
    } catch (error) {
      console.log("FoodStore -> deleteFood -> error", error);
    }
  };
}
const foodStore = new FoodStore();
foodStore.fetchFood();

export default foodStore;