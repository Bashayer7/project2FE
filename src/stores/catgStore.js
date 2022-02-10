import inst from "./Instance";
import { makeAutoObservable } from "mobx";


class CatgStore {
  categories = null;

  constructor() {
    makeAutoObservable(this, {});
  }
  fetchCatgeory = async () => {
    try {
      const res = await inst.get("/categories");
    } catch (error) {
      console.log(error);
    }
  };

  CreateCatgeory = async (newCatg) => {
    try {
      const res = await inst.post("/categories", newCatg);
      this.categories.push(res.data);
    } catch (error) {
      this.MySwal.fire({
        icon: "error",
        text: "You cannot create a new categories",
      });
    }
  };
}
const categoriesStore = new CatgStore();
categoriesStore.fetchCatgeory();
export default categoriesStore;
