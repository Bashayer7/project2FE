import axios from "axios";
const inst = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default inst;
