import axios from "axios"; 

const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    auth: {
      username: 'demo',
      password: 'demo'
    }
});

export default axiosInstance;