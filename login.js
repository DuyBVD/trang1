import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './login.css';
import { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import { AiOutlineLock } from "react-icons/ai";

function Login() {

  const [ showInput, setShowInput ] = useState({})

  console.log(showInput);
  let dataRp = [''];
  function getData() {
    dataRp = showInput;
    // console.log("data:", dataRp);
    let dataLocal = JSON.parse(localStorage.getItem('showInput'));
    console.log(dataLocal.email);

    if (dataRp.email == dataLocal.email, dataRp.password == dataLocal.pwd) {
      alert('nhap thanh cong');
    }
    else{
      alert('ban nhap sai');
    }
  }

  function changeInput(props) {
    if (props.target.name === 'email') {
      setShowInput(oldData => ({
        ...oldData,
        email: props.target.value
      }))
    }

    if (props.target.name === 'pwd'){
      setShowInput(oldData =>({
        ...oldData,
        password: props.target.value
      }))
    }
  }
  return (
    <div className='container'>
      <div className="body" >
        <div className="box">
          <div className='text-title'>
            <h1>Organica</h1>
          </div>
          <div className='form-input-box'>
            <div className="form-item">
              <span className="icon"><VscAccount size={32} /></span>
              <input onChange={changeInput} className="form-input" id="email" name="email"type="text" placeholder="Email or phone number "></input>
            </div>
          </div>
          <div className='form-input-box'>
            <div className="form-item">
              <span className="icon"><AiOutlineLock size={32} /></span>
              <input onChange={changeInput} className="form-input" id='password'name="pwd" type="password" placeholder="Password"></input>
            </div>
          </div>
          <div className='forgot-password'>
            <button className='for-pwd'>quên mật khẩu ?</button>
          </div>
          <div className='button-submit'>
            <button onClick={getData} className='button' type="submit">Đăng nhập</button>
          </div>
          <div className='registration-page'>
            <p>Chưa có tài khoản ?</p>
            <Link to={'/login'}><button className='button-page'>Đăng kí</button></Link>
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
