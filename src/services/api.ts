import axios from 'axios'
import { API_KEY } from '../config/api'

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  params: { api_key: API_KEY },
})

export default api
