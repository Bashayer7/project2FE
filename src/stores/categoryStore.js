import { makeObservable, observable, action, configure } from "mobx";
import api from "./api";

class CategoryStore {
  category = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      category: observable,
      loading: observable,
      fetchCategory: action,
      createCategory: action,
      deleteCategory: action,
      updateCategory: action,
      leaveCategory: action,
    });
  }

  fetchCategory = async () => {
    try {
      const response = await api.get("/category");
      this.category = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
  createCategory = async (NewCategory) => {
    try {
      const response = await api.post("/category", newCategory);
      this.category.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteCategory = async (_id) => {
    try {
      await api.delete(`/category/${_id}`);
      let tempCategory = this.category.filter(
        (category) => category._id !== _id
      );
      this.category = tempCategory;
    } catch (error) {
      console.log(error);
    }
  };

  updateCategory = async (updatedCategory) => {
    try {
      const response = await api.put(
        `/category/${updatedCategory._id}`,
        updatedCategory
      );

      let tempCategory = this.category.map((category) =>
        category._id === updatedCategory._id ? response.data : category
      );
      this.category = tempCategory;
    } catch (error) {
      console.log(error);
    }
  };

  leaveCategory = async (categoryId) => {
    try {
      const res = await api.post(`/category/leave/${categoryId}`);
      const yaaay = this.category.map((category) =>
        category._id === res.data._id ? res.data : category
      );
      this.category = yaaay;
    } catch (error) {
      console.log(error);
    }
  };
}
let categoryStore = new CategoryStore();
categoryStore.fetchCategory();
export default categoryStore;
