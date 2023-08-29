import { Route, HashRouter as Router } from 'react-router-dom';
import App from './App';
import { HomePage } from './components/HomePage';

export const Root = () => (
  <Router>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="phones" />
    </Route>

    <Route path="*" element={<p>Page not found</p>} />
  </Router>
);
