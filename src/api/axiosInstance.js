import axios from "axios";

const wordpress = axios.create({
  baseURL: "https://findskin.doctor/wp-json/wp/v2",
});

export default wordpress;
