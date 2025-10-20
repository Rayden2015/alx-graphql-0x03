import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Home from '@/pages/index';
import Characters from '@/pages/Characters';
import CharacterDetail from '@/pages/CharacterDetail';
import Episodes from '@/pages/Episodes';
import Locations from '@/pages/Locations';
import ErrorBoundary from '@/components/ErrorBoundary';
import '@/styles/App.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/characters/:id" element={<CharacterDetail />} />
              <Route path="/episodes" element={<Episodes />} />
              <Route path="/locations" element={<Locations />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

