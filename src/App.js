import './scss/App.scss';
import { ChromeExtention } from './pages';
import { ScrollToTop } from './components';

function App() {
  return (
    <div className="App">
      <ChromeExtention />
      <ScrollToTop />
    </div>
  );
}

export default App;
