import axios from "axios";


const instance = axios.create({
    // .. where we make our configurations
        baseURL: "https://zenithar-dev.herokuapp.com",
        headers: {
          'Authorization': process.env.REACT_APP_BEARER
          }
        //headers['Content-Type']= "application/json";

        

});

export default instance;