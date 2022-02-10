import { makeAutoObservable} from "mobx";
import api from "./api";

class IngredientStore {

    constructor() {
    makeAutoObservable(this, {});
  }
  ingredients = [];
  loading = true;

  

  fetchIngredients = async () => {
    try {
      const response = await api.get("/ingredients");
      this.ingredients = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
  createIngredient = async (newIngredient) => {
    try {
      const response = await api.post("/ingredients", newIngredient);
      this.category.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteIngredient = async (_id) => {
    try {
      await api.delete(`/ingredients/${_id}`);
      let tempIngredient = this.ingredients.filter(
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
        `/ingredients/${updatedIngredient._id}`,
        updatedIngredient
      );

      let tempIngredient = this.ingredients.map((ingredient) =>
        ingredient._id === updatedIngredient._id ? response.data : ingredient
      );
      this.ingredient = tempIngredient;
    } catch (error) {
      console.log(error);
    }
  };

}
const ingredientStore = new IngredientStore();
ingredientStore.fetchIngredients();
export default ingredientStore;