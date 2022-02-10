import { makeAutoObservable } from "mobx";
import decode  from "jwt-decode";
import api from "./api";

class AuthStore {
    user = null;
    
    constructor() {
        makeAutoObservable(this, {})
    }

    setUser = (token) => {
        localStorage.setItem("myToken", token)
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        this.user = decode(token);
    }

    signUp = async (user) => {
        try {
            const response = await api.post("/signup", user);
            this.setUser(response.data.token);
        }
        catch(error) {
            console.log(error);
        }
    }

        signIn = async (user) => {
            try {
            const response = await api.post("/signin", user);
            this.setUser(response.data.token);
            console.log(this.user);
        }
            catch(error) {
            console.log(error);
        }
    }

     signout = () => {
        delete api.defaults.headers.common.Authorization;
        this.user = null;
        localStorage.removeItem("myToken");
    };
     
     checkForToken = () => {
        const token = localStorage.getItem("myToken");
        if(token){
            const currentTime = Date.now();
            const exp = decode(token).exp;
            if(exp > currentTime){
              this.setUser(token);  
            }
            else {
                this.signout();
            }
         }
        else {
        this.signout();
        }
}  
}
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
