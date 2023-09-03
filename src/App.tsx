import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CartPage } from './pages/CartPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <CartPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
