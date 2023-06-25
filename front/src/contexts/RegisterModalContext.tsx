import React, { createContext, useState, ReactNode } from 'react';

interface ShowRegisterModalContextProps {
  showRegisterModal: boolean;
  setShowRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ShowRegisterModalProviderProps {
  children: ReactNode;
}

const ShowRegisterModalContext = createContext<ShowRegisterModalContextProps>({
  showRegisterModal: false,
  setShowRegisterModal: () => {}
});

const ShowRegisterModalProvider: React.FC<ShowRegisterModalProviderProps> = ({ children }) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <ShowRegisterModalContext.Provider value={{ showRegisterModal, setShowRegisterModal }}>
      {children}
    </ShowRegisterModalContext.Provider>
  );
};

export { ShowRegisterModalContext, ShowRegisterModalProvider };
