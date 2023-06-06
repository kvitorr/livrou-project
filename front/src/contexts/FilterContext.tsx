import React, { createContext, useState, ReactNode } from 'react';

interface ShowFilterContextProps {
  showFilter: boolean;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ShowFilterProviderProps {
  children: ReactNode;
}

const ShowFilterContext = createContext<ShowFilterContextProps>({
  showFilter: false,
  setShowFilter: () => {}
});

const ShowFilterProvider: React.FC<ShowFilterProviderProps> = ({ children }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <ShowFilterContext.Provider value={{ showFilter, setShowFilter }}>
      {children}
    </ShowFilterContext.Provider>
  );
};

export { ShowFilterContext, ShowFilterProvider };
