import './main.css';
import { AiTwotonePhone, AiTwotoneMail, AiOutlineSearch, AiOutlineUserAdd, AiOutlineHome, AiOutlineShoppingCart} from "react-icons/ai";
import { BsFillBagCheckFill, BsNewspaper,BsPeopleFill,BsMessenger } from "react-icons/bs";
function Main(){
    return(
        <div className='all'>
            <div className='Section1'>

                <span className='icon_phone'><AiTwotonePhone />0983747657</span>
                <span className='icon_email'><AiTwotoneMail />duyk10.261@eaut.edu.vn</span>

            </div>
            <div className='Section2'>
                <input className='search' type="text" id="username" name="user" placeholder="Bạn đang tìm kiếm gì?"></input>
                <span className='icon_search'><AiOutlineSearch /></span>
                <span className='icon_account'><AiOutlineUserAdd /> Tài khoản</span>
                <span className='icon_cart'><BsFillBagCheckFill />Giỏ hàng</span>
            </div>
            <div className='Section3'>
                <span className='icon_home'><AiOutlineHome size={32}/>Trang chủ</span>
                <span className='icon_product'><AiOutlineShoppingCart size={32}/>Sản phẩm</span>
                <span className='x1'>Xe đạp địa hình</span>
                <span className='x1'>Xe đẹp trẻ em</span>
                <span className='x1'>Xe đẹp đường phố</span>
                <span className='icon_news'><BsNewspaper size={32}/>Tin tức </span>
                <span className='icon_introduce'><BsPeopleFill size={32}/>Giới thiệu </span>
                <span className='icon_mess'><BsMessenger size={32}/>Liên hệ</span>
            </div>
            <div className='photo'>
                <img className='image1' src='https://shopxedap.vn/Images/Logoes/XTC_ADV_3.jpg '></img>
                <img className='image2' src='https://shopxedap.vn/Images/Logoes/tra_gop_198_600_2.jpg'></img>
            </div>




        </div>
    )
}
export default Main;