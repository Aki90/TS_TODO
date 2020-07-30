import axios from 'axios';

export default class AxiosService {
  public static readonly instance: AxiosService = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
