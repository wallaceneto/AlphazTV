import axios from "axios";

const thumbApi = axios.create({
  baseURL: 'https://img.youtube.com/vi'
});

export default thumbApi;