import { axiosWithAuth } from "./axiosWithAuth"

 export const getColors = () => {
    return axiosWithAuth().get('http://localhost:5000/api/colors')
        .then(res => res)
        .catch(err => err);
  }