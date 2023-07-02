import { createContext, useState, ReactNode } from 'react';
import { axiosPrivate } from '../utils/api';


interface UserLogin {
    email: string;
    password: string;
}

interface AuthContextProps {
  loggedIn: boolean;
  isAdmin: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  login: (userData: UserLogin) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  loggedIn: false,
  isAdmin: false,
  setLoggedIn: () => {},
  setIsAdmin: () => {},
  login: async () => {},
  logout: () => {}
});



interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  

  const login = async (userData: UserLogin) => {
    try {

      const response = await axiosPrivate.post('auth/login', userData);

      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      setLoggedIn(true)
  
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    console.log("chamou logout")
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, isAdmin, setLoggedIn, setIsAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
