import "./assets/css/App.css"
import "./assets/css/Nav.css"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <nav className="navbar">
          <h1 className="nav-title"><span>C</span>ar <span>Z</span>one</h1>
          <ul>
            <li><Link to="/" className="nav-menu">Home</Link></li>
            <li><Link to="/" className="nav-menu">About</Link></li>
            <li><Link to="/" className="nav-menu">Product</Link></li>
            <li><Link to="/" className="nav-menu">Services</Link></li>
            <li><Link to="/" className="nav-menu">Contact us</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
