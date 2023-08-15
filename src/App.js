import { BrowserRouter as Router, Route, Link, NavLink, Routes } from "react-router-dom";
import Login from './pages/login';
import './App.css';
import Register from './pages/register/register';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" exact element={<Login></Login>} />
          <Route path="/about" element={<Register></Register>} />
        </Routes>
        {/* <Route path="/contact" component={Contact} />
        <Route component={NotFound}/> */}
    </div>

    {/* <div> */}
      {/* <Login /> */}
      {/* <Register/> */}
      
    {/* </div> */}
    </Router>
  );
}

export default App;
