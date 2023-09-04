import {
  Route,
  Routes,
  HashRouter as Router,
  Navigate,
} from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Favourites } from './components/Favourites/Favourites';
import { CartPage } from './pages/CartPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index path="home" element={<HomePage />} />
        <Route path="" element={<Navigate to="home" replace />} />
        <Route path="phones">
          <Route path=":phoneId?" />
        </Route>
        <Route path="tablets" />
        <Route path="accessories" />
        <Route path="favorites" element={<Favourites />} />
        <Route path="cart" element={<CartPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);
