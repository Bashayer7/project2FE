
import api from "./api";
import { makeAutoObservable} from "mobx";



class CategoryStore {
    categories = [];
  
    constructor() {
      makeAutoObservable(this, {});
    }
    fetchCatgeory = async () => {
      try {
        const response = await api.get("/categories");
        this.categories = response.data;
      } catch (error) {
        console.log(error);
      }
    };
  
    CreateCatgeory = async (newCategory) => {
      try {
        const response = await api.post("/categories", newCategory);
        this.categories.push(response.data);
      } catch (error) {
        this.MySwal.fire({
          icon: "error",
          text: "You cannot create a new categories",
        });
      }
    };
  }
  const categoriesStore = new CategoryStore();
  categoriesStore.fetchCatgeory();
  export default categoriesStore;