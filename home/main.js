import './main.css';
import { BrowserRouter as Router, Route, Link, NavLink, Routes } from "react-router-dom";
function Main(){
    return(
        <div className='all'>
            <p>Chưa có tài khoản ?</p>
            <Link to={'/login'}><button className='button-page'>Đăng kí</button></Link>
          </div>
    )
}
export default Main;