import React, { createContext, useState, ReactNode } from 'react';

interface ShowAnnouncementModalContextProps {
  showAnnouncementModal: boolean;
  setShowAnnouncementModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ShowAnnouncementModalProviderProps {
  children: ReactNode;
}

const ShowAnnouncementModalContext = createContext<ShowAnnouncementModalContextProps>({
  showAnnouncementModal: false,
  setShowAnnouncementModal: () => {}
});

const ShowAnnouncementModalProvider: React.FC<ShowAnnouncementModalProviderProps> = ({ children }) => {
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);

  return (
    <ShowAnnouncementModalContext.Provider value={{ showAnnouncementModal, setShowAnnouncementModal }}>
      {children}
    </ShowAnnouncementModalContext.Provider>
  );
};

export { ShowAnnouncementModalContext, ShowAnnouncementModalProvider };
