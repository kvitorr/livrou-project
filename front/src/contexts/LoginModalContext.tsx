import React, { createContext, useState, ReactNode } from 'react';

interface ShowLoginModalContextProps {
  showLoginModal: boolean;
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ShowLoginModalProviderProps {
  children: ReactNode;
}

const ShowLoginModalContext = createContext<ShowLoginModalContextProps>({
  showLoginModal: false,
  setShowLoginModal: () => {}
});

const ShowLoginModalProvider: React.FC<ShowLoginModalProviderProps> = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <ShowLoginModalContext.Provider value={{ showLoginModal, setShowLoginModal }}>
      {children}
    </ShowLoginModalContext.Provider>
  );
};

export { ShowLoginModalContext, ShowLoginModalProvider };
