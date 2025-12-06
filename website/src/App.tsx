import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import PrivacyPolicy from './components/PrivacyPolicy';
import AuthCallback from './components/AuthCallback';
import Analytics from './components/Analytics';
import Documentation from './components/Documentation';

function App() {
  return (
    <Router>
      <div className="min-h-screen dark-gradient">
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/docs/*" element={<Documentation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
