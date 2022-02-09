import { makeObservable, observable, action, configure } from "mobx";
import api from "./api";

class IngredientStore {
  ingredient = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      ingredient: observable,
      loading: observable,
      fetchIngredient: action,
      createIngredient: action,
      deleteIngredient: action,
      updateIngredient: action,
      leaveIngredient: action,
    });
  }

  fetchIngredient = async () => {
    try {
      const response = await api.get("/ingredient");
      this.ingredient = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
  createIngredient = async (NewIngredient) => {
    try {
      const response = await api.post("/ingredient", newIngredient);
      this.category.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteIngredient = async (_id) => {
    try {
      await api.delete(`/ingredient/${_id}`);
      let tempIngredient = this.ingredient.filter(
        (ingredient) => ingredient._id !== _id
      );
      this.ingredient = tempIngredient;
    } catch (error) {
      console.log(error);
    }
  };

  updateIngredient = async (updatedIngredient) => {
    try {
      const response = await api.put(
        `/ingredient/${updatedIngredient._id}`,
        updatedIngredient
      );

      let tempIngredient = this.ingredient.map((ingredient) =>
        ingredient._id === updatedIngredient._id ? response.data : ingredient
      );
      this.ingredient = tempIngredient;
    } catch (error) {
      console.log(error);
    }
  };

  leaveIngredient = async (ingredientId) => {
    try {
      const res = await api.post(`/ingredient/leave/${ingredientId}`);
      const yaaay = this.ingredient.map((ingerdient) =>
        ingerdient._id === res.data._id ? res.data : ingerdient
      );
      this.ingredient = yaaay;
    } catch (error) {
      console.log(error);
    }
  };
}
let ingredientStore = new IngredientStore();
ingredientStore.fetchIngredient();
export default ingredientStore;
