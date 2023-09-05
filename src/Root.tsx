import {
  Route,
  Routes,
  HashRouter as Router,
  Navigate,
} from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AppProvider } from './components/AppContext/AppContext';
import { CartPage } from './pages/CartPage';
import { Catalog } from './components/Catalog';
import { ProductPage } from './pages/ProductPage';

export const Root = () => (
  <Router>
    <AppProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="home" element={<HomePage />} />
          <Route path="" element={<Navigate to="home" replace />} />
          <Route path="phones">
            <Route
              index
              element={(
                <Catalog
                  productName="Mobile phones"
                  pathName={['Phones']}
                />
              )}
            />
            <Route path=":phoneId?" element={<ProductPage />} />
          </Route>
          <Route
            path="tablets"
            element={(
              <Catalog
                productName="Tablets"
                pathName={['Tablets']}
              />
            )}
          />
          <Route
            path="accessories"
            element={(
              <Catalog
                productName="Accessories"
                pathName={['Accessories']}
              />
            )}
          />
          <Route path="favorites" />
          <Route path="cart" element={<CartPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppProvider>
  </Router>
);
