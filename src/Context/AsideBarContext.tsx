import { createContext, FC, useState } from 'react';
import { INavbarContext } from '../common/interfaces/Context/NavbarContext.interface';

const AsidebarContext = createContext<INavbarContext>({} as INavbarContext);

const AsidebarContextProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenAsideMenu = () => {
    setIsOpen(true);
  };

  const handleCloseAsideMenu = () => {
    setIsOpen(false);
  };

  return (
    <AsidebarContext.Provider value={{ handleOpenAsideMenu, handleCloseAsideMenu, isAsideMenuOpen: isOpen }}>
      {children}
    </AsidebarContext.Provider>
  );
};

export { AsidebarContext, AsidebarContextProvider };
