/**
 * Import Libraries
 */
import axios from 'axios'

/**
 * Exporting a Custom Instance of Axios
 */
export default axios.create({
  baseURL: `${process.env.VUE_APP_BACKEND_SERVER}/`,
  timeout: 3000
});
