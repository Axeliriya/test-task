import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

const apiService = {
  getUsers() {
    return axios.get(`/`);
  },

  getDetailsUser(id) {
    return axios.get(`?id=${id}`);
  },
};

export default apiService;
