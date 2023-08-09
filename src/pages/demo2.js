
import './demo2.css';
import { VscAccount} from "react-icons/vsc";
import { AiOutlineLock } from "react-icons/ai";


function Demo2 () {
  
  
  return (
    <div class="body" >
      <div class="box">
        <p>Organica</p>
        <div class="form-box" >
        <div class="email">  
          <span class="icon1"><VscAccount></VscAccount></span>
          <input  type="text"  placeholder="Email or phone number "></input>
        </div>
        <div class="password">
           <span class="icon2"><AiOutlineLock></AiOutlineLock></span>
          <input type="password" placeholder="Password"></input>
        </div>
          <button type="submit">Đăng nhập</button>
        </div>

      </div>
    </div>
  );
}

export default Demo2;
