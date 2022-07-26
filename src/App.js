import { Routes, Route } from 'react-router-dom';

import './scss/App.scss';
import {
  ChromeExtention,
  Collections,
  Pricing,
  PromoAccess,
  MarketExplorer,
  Finder,
  AppPage,
} from './pages';
import { Header, Footer, ScrollToTop } from './components';
import { ModalContextProvider } from './contexts';

function App() {
  return (
    <ModalContextProvider>
      <Header />
      <Routes>
        <Route path="/collections" element={<Collections />} exact />
        <Route path="/extention" element={<ChromeExtention />} exact />
        <Route path="/pricing" element={<Pricing />} exact />
        <Route path="/promo-access" element={<PromoAccess />} exact />
        <Route path="/market-explorer" element={<MarketExplorer />} exact />
        <Route path="/finder" element={<Finder />} exact />
        <Route path="/app-page" element={<AppPage />} exact />
      </Routes>
      <Footer />
      <ScrollToTop />
    </ModalContextProvider>
  );
}

export default App;
