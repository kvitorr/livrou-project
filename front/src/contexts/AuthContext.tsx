import { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios'


interface UserLogin {
    email: string;
    password: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    
    birthDate: Date;
    registrationDate: Date;
    
    isAdmin: boolean;
    authToken: string;
}

interface AuthContextProps {
  user: User | null;
  login: (userData: UserLogin) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async (userData: UserLogin) => {},
  logout: () => {}
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Verifica se há um usuário logado no localStorage ao carregar o aplicativo
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (userData: UserLogin) => {
    console.log(userData)
    try {
      //const response = await axios.post('https://api.example.com/login', userData);
  
      
    } catch (error) {
      console.error(error);
    }

    // Simula uma autenticação bem-sucedida
    // Aqui você deve realizar sua lógica de autenticação real, como fazer uma requisição para um servidor
    // Após a autenticação, você receberia as informações do usuário e chamaria setUser com os dados do usuário
    
    
    //setUser(userData);
    // Armazena o usuário no localStorage para persistência
    //localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    // Limpa as informações do usuário do estado e do localStorage
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
