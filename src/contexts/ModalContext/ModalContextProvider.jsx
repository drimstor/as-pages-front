import React, { useState } from 'react';
import { ModalSingUp } from '../../components';
import { ModalContext } from './';

import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const ModalContextProvider = ({ children }) => {
  // Состояние открытости модалки
  const [openedModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!openedModal);
  // Брейкпоинты от MaterialUI
  const matches1025 = useMediaQuery('(min-width:1025px)');
  const matches769 = useMediaQuery('(min-width:769px)');
  // Тема от Maerial UI
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2196F3',
      },
      secondary: {
        main: '#212121',
      },
      text: {
        primary: '#212121',
        secondary: '#616161',
        disabled: '#9E9E9E',
      },
      white: {
        main: '#ffffff',
      },
    },
  });
  // Значения для провайдера
  const modalContextValues = {
    toggleModal,
    matches1025,
    matches769,
  };

  return (
    <ModalContext.Provider value={modalContextValues}>
      <ThemeProvider theme={theme}>
        <ModalSingUp open={openedModal} toggleModal={toggleModal} />
        {children}
      </ThemeProvider>
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
