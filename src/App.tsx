// import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Banner } from './pages/HomePage/сomponents/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Banner />
      </div>
      <Footer />
    </div>
  );
}

export default App;
