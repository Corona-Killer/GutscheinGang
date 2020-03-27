import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

setJwt(getJwt());

function setJwt(token: string | null) {
  if (!token) return;
  axios.defaults.headers.common['x-auth-token'] = token;
}

function getJwt(): string | null {
  return localStorage.getItem('x-auth-token');
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};