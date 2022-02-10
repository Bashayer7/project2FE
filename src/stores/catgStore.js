import inst from "./Instance";
import { makeAutoObservable } from "mobx";


class CatgStore {
  categories = [];

  constructor() {
    makeAutoObservable(this, {});
  }
  fetchCatgeory = async () => {
    try {
      const res = await inst.get("/categories");
      this.categories= res.data
    } catch (error) {
      console.log(error);
    }
  };

  CreateCatgeory = async (newCatg) => {
    try {
      const res = await inst.post("/categories", newCatg);
      console.log(res.data)
      this.categories.push(res.data);
    } catch (error) {
     console.log(error)
    }
  };
}
const categoriesStore = new CatgStore();
categoriesStore.fetchCatgeory();
export default categoriesStore;
