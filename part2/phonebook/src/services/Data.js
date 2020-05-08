import Axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => Axios.get(baseUrl).then((response) => response.data);

const create = (newObj) =>
  Axios.post(baseUrl, newObj).then((response) => response.data);

const update = (id, updatedObj) => {
  console.log(id);
  console.log(updatedObj);

  return Axios.put(`${baseUrl}/${id}`, updatedObj).then((response) => {
    console.log(response);
  });
};

const remove = (id) =>
  Axios.delete(`${baseUrl}/${id}`).then((response) => {
    console.log(response);
    return response.data;
  });

export default { getAll, create, update, remove };
