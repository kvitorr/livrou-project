import { createContext, useState, ReactNode } from 'react';
import { axiosPublic } from '../utils/api';


interface UserLogin {
    email: string;
    password: string;
}

interface AuthContextProps {
  loggedIn: boolean;
  isAdmin: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  login: (userData: UserLogin) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  loggedIn: false,
  isAdmin: false,
  setLoggedIn: () => {},
  login: async () => {},
  logout: () => {}
});



interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isAdmin, setisAdmin] = useState<boolean>(false);

  const login = async (userData: UserLogin) => {
    try {

      const response = await axiosPublic.post('auth/login', userData);

      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      setLoggedIn(true)
  
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    // Limpa as informações do usuário do estado e do localStorage
    setLoggedIn(false);
    setisAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, isAdmin, setLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
