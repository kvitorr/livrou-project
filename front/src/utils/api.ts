import axios from "axios";

export const axiosPrivate = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Content-Type": "application/json",
    }
});

export const axiosPublic = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
      "Content-Type": "application/json",
  }
});


axiosPrivate.interceptors.request.use(
    async (config) => {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export const verifyRefreshToken = async () => {
    try {
        const refresh_token= localStorage.getItem("refresh_token");

        if(refresh_token){
            const response = await axios.post("http://localhost:3000/auth/refresh", 
            {
                refresh_token
            }, 
            {
                headers: {
                "Content-Type": "application/json",
            }});
            return response.data;
        }
    } catch (error) {
      console.log(error)
      return null;
    }
};

axiosPrivate.interceptors.response.use(
    response => response,
    async function (error) {
        const originalRequest = error.config
      if (error.response && error.response.status === 401 && !originalRequest.sent) {
        originalRequest.sent = true;
        const data = await verifyRefreshToken();

        if(data) {
            console.log("novos tokens gerados: ", data)
    
            localStorage.setItem("access_token", data.access_token)
            localStorage.setItem("refresh_token", data.refresh_token)
        
            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${data.access_token}`;
            return axiosPrivate(originalRequest);
        } else {
            // Refresh token expirado também
            localStorage.removeItem("access_token")
            localStorage.removeItem("refresh_token")
            window.location.reload();
          }
      } 
    }
  );