import React, { createContext, useState, ReactNode } from 'react';

interface FilterQueryContextProps {
  filterQuery: string;
  setFilterQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface FilterProviderProps {
  children: ReactNode;
}

const FilterQueryContext = createContext<FilterQueryContextProps>({
  filterQuery: '',
  setFilterQuery: () => {}
});

const FilterQueryProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filterQuery, setFilterQuery] = useState('');

  return (
    <FilterQueryContext.Provider value={{ filterQuery, setFilterQuery }}>
      {children}
    </FilterQueryContext.Provider>
  );
};

export { FilterQueryContext, FilterQueryProvider };
