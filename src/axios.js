import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

axios.defaults.headers.common["Authorization"] = "AUTH TOKEN 2 for this req";

//instance.interceptors.request...

export default instance;
