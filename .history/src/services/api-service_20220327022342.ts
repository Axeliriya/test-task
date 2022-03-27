import axios from 'axios';
import { AxiosResponse } from 'axios';

interface IApiServices {
  getUsers(): Promise<AxiosResponse>;
  getDetailsUser(id: number): Promise<AxiosResponse<any, any>>;
}

axios.defaults.baseURL = `https://jsonplaceholdertypicode.com`;

const apiServices: IApiServices = {
  getUsers() {
    return axios.get(`/users`);
  },

  getDetailsUser(id) {
    return axios.get(`/users?id=${id}`);
  },
};

export default apiServices;
