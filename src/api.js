import axios from "axios";

const api = axios.create({
  baseURL: "https://furniture-backend-docker-production.up.railway.app",
});

export default api;
