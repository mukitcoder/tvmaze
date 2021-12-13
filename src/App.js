import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './Pages/Shared/Header/Navigation';
import Home from './Pages/Home/Home';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import OrderPage from './Pages/DetailsPage/OrderPage/OrderPage';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="home" element={<Home />} />
        <Route path="details" element={<DetailsPage />}/>
        <Route path="order" element={<OrderPage />}/>
        <Route path="*" element={<NotFound />}/>
    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;
