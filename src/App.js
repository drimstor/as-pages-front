import './scss/App.scss';
import { ChromeExtention, Collections } from './pages';
import { Header, Footer, ScrollToTop } from './components';

import { createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

function App() {
  const matches1025 = useMediaQuery('(min-width:1025px)');
  const matches769 = useMediaQuery('(min-width:769px)');
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
  return (
    <div className="App">
      <Header matches={matches1025} theme={theme} />
      {/* <ChromeExtention matches={matches769} theme={theme} /> */}
      <Collections theme={theme} />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
