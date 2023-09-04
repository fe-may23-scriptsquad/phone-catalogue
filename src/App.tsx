// import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Catalog } from './pages/Catalog';
import phonesFromServer from './api/phones.json';

const productName = 'Mobile phones';
const pathName = ['Phones'];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Catalog
          productName={productName}
          phones={phonesFromServer}
          pathName={pathName}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
