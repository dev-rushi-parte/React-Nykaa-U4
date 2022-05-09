
import style from './Navbar.module.css';
import {Link} from "react-router-dom"
const HeaderNotification = () => (
    <div className={style.header_img_container}>
            <img src="./assets/images/header_img.jpg" alt="" srcset="" />
            <div className={style.top_header }>
                {/* flex */}
                <Link href="">
                    BEAUTY BONANZA Get Your Daily Dose of Amazing Offers
                </Link>
                <div className={style.top_menu }>
                    {/* flex */}
                    <div className={style.logo_wrapper }>
                        {/* flex */}
                        <i class='bx bx-mobile-alt'></i>
                        <span>Get App</span>
                    </div>
                    |
                    <div className={style.logo_wrapper }>
                        {/* flex */}
                        <i class='bx bxs-location-plus' ></i>
                        <span>Store & Events</span>
                    </div>
                    |
                    <div className={style.logo_wrapper }>
                        {/* flex */}
                        <i class='bx bxs-gift' ></i>
                        <span>Gift Card</span>
                    </div>
                    |
                    <div className={style.logo_wrapper }>
                        {/* flex */}
                        <i class='bx bxs-help-circle' ></i>
                        <span>Help</span>
                    </div>
                </div>
            </div>
        </div>
    )

export default HeaderNotification;    