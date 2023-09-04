// import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
// import { Banner } from './pages/HomePage/сomponents/Banner';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* <Banner /> */}
        <ProductPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
