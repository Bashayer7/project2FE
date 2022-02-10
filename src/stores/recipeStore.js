import { makeAutoObservable } from "mobx";
import api from "./api";

class RecipeStore {
  constructor() {
    makeAutoObservable(this);
  }
  recipes = [];
  loading = true;

    fetchRecipes = async () => {
    try {
        const response = await api.get('/recipes');
        this.recipes = response.data;
        this.loading = false;
    }
    catch(error) {
        console.log(error);
    } 
    };

    createRecipe = async (newRecipe) => {
    console.log("🚀 ~ file: recipeStore.js ~ line 23 ~ RecipeStore ~ createRecipe= ~ newRecipe", newRecipe)
    const formData = new FormData()
    for(const key in newRecipe) formData.append(key, newRecipe[key]);
    try {
      const response = await api.post("/recipes", newRecipe);
      this.recipes.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateRecipe = async (updatedRecipe, recipeId) => {
    try {
      const formData = new FormData();
      for (const key in updatedRecipe)
      formData.append(key, updatedRecipe[key]);
      const res = await api.put(`/recipes/${recipeId}`, formData);
      this.recipes = this.recipes.map((e) =>
      e.id === res.data.id ? (e = res.data) : e
      );
    } catch (error) {}
  };

  DeleteRecipe = async (recipeId) => {
    try {
      await api.delete(`/recipes/${recipeId}`);
      this.recipes = this.recipes.filter(
        (recipe) => recipe._id !== recipeId
      );
    } catch (error) {}
  };
}
const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();

export default recipeStore;