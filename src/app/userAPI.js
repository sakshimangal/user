// A mock function to mimic making an async request for data
import axios from 'axios'

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users'
})

