import inst from "./Instance";
import { observable, action, makeObservable } from "mobx";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class CatgStore {
  category = null;

  constructor() {
    makeAutoObservable(this, {});
  }
  fetchCatgeory = async () => {
    try {
      const res = await inst.get("/category");
    } catch (error) {
      console.log(error);
    }
  };

  CreateCatgeory = async (newCatg) => {
    try {
      const res = await inst.post("/category", newCatg);
      this.category.push(res.data);
    } catch (error) {
      this.MySwal.fire({
        icon: "error",
        text: "You cannot create a new category",
      });
    }
  };
}
const categoryStore = new CatgStore();
categoryStore.fetchCatgeory();
export default categoryStore;
