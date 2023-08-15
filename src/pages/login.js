import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './login.css';
import { VscAccount } from "react-icons/vsc";
import { AiOutlineLock } from "react-icons/ai";

function Login() {
  return (
    <div className='container'>
      <div class="body" >
        <div class="box">
          <div className='text-title'>
            <h1>Organica</h1>
          </div>
          <div className='form-input-box'>
            <div class="form-item">
              <span class="icon"><VscAccount size={32} /></span>
              <input className="form-input" id="email"type="text" placeholder="Email or phone number "></input>
            </div>
          </div>
          <div className='form-input-box'>
            <div class="form-item">
              <span class="icon"><AiOutlineLock size={32} /></span>
              <input className="form-input" id='password' type="password" placeholder="Password"></input>
            </div>
          </div>
          <div className='forgot-password'>
            <button className='for-pwd'>quên mật khẩu ?</button>
          </div>
          <div className='button-submit'>
            <button className='button' type="submit">Đăng nhập</button>
          </div>
          <div className='registration-page'>
            <p>Chưa có tài khoản ?</p>
            <Link to={'/about'}><button className='button-page'>Đăng kí</button></Link>
          </div>
          <br />
          <hr className='hr' />
          <br />

        </div>
      </div>
    </div>
  );
}

export default Login;
