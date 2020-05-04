import Axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => Axios.get(baseUrl).then((response) => response.data);

const create = (newObj) =>
  Axios.post(baseUrl, newObj).then((response) => response.data);

const update = (id, newObj) =>
  Axios.put(`${baseUrl}/${id}`).then((response) => response.data);

export default { getAll, create, update };
