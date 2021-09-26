import axios from "axios";

axios.defaults.baseURL = "http://demo.smartlabor.in/api/"
axios.defaults.headers.common['Authorization'] = "Token ff00490cb707fc71df1655a8e25152862092dcad";
export default axios