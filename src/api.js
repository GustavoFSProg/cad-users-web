import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:4000',
  baseURL: 'https://cad-users-api.herokuapp.com/',
})

export default api
