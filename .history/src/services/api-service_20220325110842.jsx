import axios from 'axios';

interface IApiServices {
  getUsers(): Promise<AxiosResponse>;
  getDetailsUser(id: any): Promise<AxiosResponse<any, any>>;
}

axios.defaults.baseURL = `https://jsonplaceholder.typicode.com`;

const apiServices = {
  getUsers() {
    return axios.get(`/users`);
  },

  getDetailsUser(id) {
    return axios.get(`/users?id=${id}`);
  },
};

export default apiServices;
