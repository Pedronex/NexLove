import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.237.0.25:3554",
});
