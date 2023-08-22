import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import './register.css'
function Register() {
  const [ showInput, setShowInput ] = useState({})


  // console.log(showInput);
  function onsubmit(){
    // var showInput= JSON.parse(localStorage.setItem('showInput')); // = null
    // localStorage.removeItem('email')
    localStorage.setItem('showInput', JSON.stringify(showInput));
    // if (showInput) {
    //   alert(showInput.name
    //     + '\n'+showInput.pwd 
    //     + '\n'+showInput.pwds 
    //     + '\n'+showInput.user
    //     + '\n'+showInput.email
    //     );
    // }
  }
  function changeInput(props) {
    if (props.target.name === 'username') {
      setShowInput(oldData => ({
        ...oldData,
        name: props.target.value
      }))
    }

    if (props.target.name === 'pwd'){
      setShowInput(oldData =>({
        ...oldData,
        pwd: props.target.value
      }))
    }
    if (props.target.name === 'pwds'){
      
      setShowInput(oldData =>({
        ...oldData,
        pwds: props.target.value
      }))
    }
    if (props.target.name === 'user'){
      setShowInput(oldData =>({
        ...oldData,
        user: props.target.value
      }))
    }
    if (props.target.name ==='email'){
      setShowInput(oldData =>({
        ...oldData,
        email: props.target.value
      }))
    }
    if (props.target.name ==='sdt'){
      setShowInput(oldData =>({
        ...oldData,
        sdt: props.target.value
      }))
    }
  }
  return (
    <div class="container-register">
      <div className='boss' >
        <h1>ĐĂNG KÍ TÀI KHOẢN  </h1>
        <div class="box1">
          <p>TÊN ĐĂNG NHẬP:</p>
          <input onChange={changeInput} type="text" id="username" name="username" placeholder="Tên đăng nhập"></input>
        </div>
        <div class="box1">
          <p>MẬT KHẨU:</p>
          <input onChange={changeInput}  type="text" id="pwd" name="pwd" placeholder="Mật khẩu"></input>
        </div>
        <div class="box1">
          <p>NHẬP LẠI MẬT KHẨU:</p>
          <input onChange={changeInput} type="text" id="pwd" name="pwds" placeholder="Nhập lại mật khẩu"></input>
        </div>
        <div class="box1">
          <p>HỌ TÊN:</p>
          <input onChange={changeInput} type="text" id="username" name="user" placeholder="Họ tên"></input>
        </div>
        <div class="box1">
          <p>EMAIL:</p>
          <input onChange={changeInput} type="text" id="email" name="email" placeholder="Nhập email"></input>
        </div>
        <div class="box1">
          <p>SỐ ĐIỆN THOẠI:</p>
          <input onChange={changeInput} type="number" id="sdt" name="sdt" placeholder="Nhập số điện thoại "></input>
        </div>
        <hr></hr>
        <div className='done'>
        <Link to={'/register'}><button onClick={onsubmit} type='submit' value='submit' >ĐĂNG KÍ</button></Link> 
        </div>
        
      </div>
    </div>
  );
}
export default Register;