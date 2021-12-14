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
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="home" element={<Home />} />
        <Route path="details/:id" element={<DetailsPage />}/>
        <Route path="about" element={<About />}/>
        <Route path="*" element={<NotFound />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
