import { createContext, useCallback, useState, useContext } from 'react';

interface AuthContextData {
  selectedGenreId: number;
  handleClickButton (indice: number): void;
}

const NavbarContext = createContext<AuthContextData>({} as AuthContextData);

export const NavbarProvider: React.FC = ({ children }) => {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton (indice: number) {
    setSelectedGenreId(indice);
  }

  return (
    <NavbarContext.Provider value={{ selectedGenreId, handleClickButton }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavBar(): AuthContextData {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error('useNavBar must be used within a NavbarProvider');
  }

  return context;
}