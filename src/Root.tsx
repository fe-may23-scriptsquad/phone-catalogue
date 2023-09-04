import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AppProvider } from './components/AppContext/AppContext';

export const Root = () => (
  <Router>
    <AppProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="phones">
            <Route path=":phoneId?" />
          </Route>
          <Route path="tablets" />
          <Route path="accessories" />
          <Route path="favourites" />
          <Route path="cart" />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppProvider>
  </Router>
);
