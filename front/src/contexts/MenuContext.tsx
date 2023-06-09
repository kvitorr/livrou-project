import React, { createContext, useState, ReactNode } from 'react';

interface ShowMenuContextProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ShowMenuProviderProps {
  children: ReactNode;
}

const ShowMenuContext = createContext<ShowMenuContextProps>({
    showMenu: false,
    setShowMenu: () => {}
});

const ShowMenuProvider: React.FC<ShowMenuProviderProps> = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ShowMenuContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </ShowMenuContext.Provider>
  );
};

export { ShowMenuContext, ShowMenuProvider };
