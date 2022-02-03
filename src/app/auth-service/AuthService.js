import axios from "axios";

const API_URL = "http://172.31.101.48:8081/api/auth/";

class AuthService {
    login(username, password) {
        return axios
          .post(API_URL + "signin", {
            username,
            password
          })
          .then(response => {
                      
            if (response.data.accessToken) {
                alert(response.data.accessToken)
              localStorage.setItem("user", JSON.stringify(response.data));
               sessionStorage.setItem("user",JSON.stringify(response.data));
            }
            return response.data;
          });
      }

      register(username, email, password) {
        return axios.post(API_URL + "signup", {
          username,
          email,
          password
        });
      }
    
      logout() {
        // localStorage.removeItem("user");
         sessionStorage.removeItem("user");
      }
}
export default new AuthService();