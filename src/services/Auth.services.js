import axios from '../api/axios.js'



const signup = (email, password, firstName,lastName, agree) => {
  return axios
    .post("/register", {
        email,
        password,
        firstName,
        lastName,
        agree
    },
    {mode:"cors" , headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": true,
      "Access-Control-Allow-Credentials": true,
  }})
    .then((res) => {
      /* if (res.data.token) {
        return res.data
         SetCookie("user", JSON.stringify(res.data)) 
        //localStorage.setItem("user", JSON.stringify(res.data));
      } */

      return res.data;
    });
};

const login = (email, password) => {
  return axios
    .post("/login", {
        email,
        password,

    })
    .then((res) => {
     

      return res.data;
    });
};



const authService = {
  signup,
  login
};

export default authService;