import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="box">
      <p>ĐĂNG KÍ TÀI KHOẢN</p>
        <div class="box1">
          <h1>TÊN ĐĂNG NHẬP:</h1>
          <input type="text" id="username" name="username" placeholder="Tên đăng nhập"></input>
        </div>
        <div class="box2">
          <h2>MẬT KHẨU:</h2>  
          <input type="password" id="pwd" name="pwd" placeholder="Mật khẩu"></input>
        </div>
        <div class="box3">
          <h3>NHẬP LẠI MẬT KHẨU:</h3>  
          <input type="password" id="pwd" name="pwd" placeholder="Nhập lại mật khẩu"></input>
        </div>
        <div class="box4">
          <h4>HỌ TÊN:</h4>
          <input type="text" id="username" name="username" placeholder="Họ tên"></input>
        </div>
        <div class="box5">
          <h5>EMAIL:</h5>
          <input type="text" id="email" name="email" placeholder="Nhập email"></input>
        </div>
        <div class="box6">
          <h6>SỐ ĐIỆN THOẠI:</h6>  
          <input type="number" id="sdt" name="sdt" placeholder="Nhập số điện thoại "></input>
        </div>
        <hr></hr>
        <button class="Done">GỬI</button>
             
    </div>
 
  );
}

export default App;
