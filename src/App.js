import { BrowserRouter as Router, Route, Link, NavLink, Routes } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Login from './pages/login';
import './App.css';
import Register from './pages/register/register';
import Main from "./pages/home/main";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" exact element={<Main></Main>} />
          <Route path="register" exact element={<Login></Login>} />
          <Route path="login" element={<Register></Register>} />
          {/* <Route path="main" element={<Main></Main>} /> */}
        </Routes>
        {/* <Route path="/contact" component={Contact} />
        <Route component={NotFound}/> */}
      </div>
        
    </Router>
  );
}

export default App;
