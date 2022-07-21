import React, { useState } from 'react';

import { ModalGlobal, ModalSingUp, ModalContactUs, ModalHelpToChoose } from '../../components';
import { ModalContext } from './';

import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const ModalContextProvider = ({ children }) => {
  // Состояние открытости модалки
  const [openedModal, setOpenModal] = useState(false);
  // Контент модалки
  const [modalContent, setModalContent] = useState(Array(0));
  // Открыть модал с контентом в аргументе и подвинуть хедер на ширину скролла
  const openModal = (modalConfig) => {
    setModalContent(modalConfig);
    setOpenModal(true);
    const scrollWidth = parseInt(window.innerWidth - document.documentElement.clientWidth);
    document.querySelector('.header').style.right = `${scrollWidth / 2}px`;
  };
  // Закрыть, подвинуть обратно
  const closeModal = () => {
    setOpenModal(false);
    document.querySelector('.header').style.right = '0';
    document.querySelector('.MuiBox-root').style.display = 'none';
  };
  // Разные контенты модалок
  const handleModalSingUp = () => {
    openModal(['Sing up for free', <ModalSingUp />]);
  };
  const handleModalContactUs = () => {
    openModal(['Contact us', <ModalContactUs />]);
  };
  const handleModalHelpToChoose = () => {
    openModal(['', <ModalHelpToChoose />]);
  };

  // Брейкпоинты от MaterialUI
  const matches1025 = useMediaQuery('(min-width:1025px)');
  const matches769 = useMediaQuery('(min-width:769px)');
  const matches426 = useMediaQuery('(min-width:426px)');

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
    matches426,
    matches769,
    matches1025,
    handleModalSingUp,
    handleModalContactUs,
    handleModalHelpToChoose,
  };

  return (
    <ModalContext.Provider value={modalContextValues}>
      <ThemeProvider theme={theme}>
        <ModalGlobal
          title={modalContent[0]}
          content={modalContent[1]}
          isOpen={openedModal}
          closeModal={closeModal}
        />
        <div id="top" className="anchor" />
        {children}
      </ThemeProvider>
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
