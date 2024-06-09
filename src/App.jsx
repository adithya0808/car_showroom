import About from "./Components/About";
import Home from "./Components/Home";
import Products from "./Components/Products";
import "./assets/css/App.css"
import "./assets/css/Nav.css"
import menu from "./assets/images/menu.png"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <nav className="navbar">
          <h1 className="nav-title"><span>C</span>ar <span>Z</span>one</h1>
          <ul>
            <li><Link to="/" className="nav-menu">Home</Link></li>
            <li><Link to="/about" className="nav-menu">About</Link></li>
            <li><Link to="/product" className="nav-menu">Product</Link></li>
            <li><Link to="/services" className="nav-menu">Services</Link></li>
            <li><Link to="/contactus" className="nav-menu">Contact us</Link></li>
          </ul>
          <button className="menu"><img src={menu} alt="menu" /></button>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
