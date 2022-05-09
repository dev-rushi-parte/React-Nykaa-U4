import style from  './Footer.module.css';


const FooterSocial = () => (
    <div className={style.footer_social_container }>
        {/* flex */}
            <div className={style.footer_brand }>
                {/* flex */}
                <div className={style.achievements}>
                    <div className={style.logo}>
                   <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg" alt=""/>
                    </div>
                    <div className={style.logo_content}>
                        <header>
                        FREE SHIPPING
                       </header>
                       <p>On Orders Above ₹499</p>
                    </div>
                </div>
                <div className={style.achievements}>
                    <div className={style.logo}>
                        <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg" />
                    </div>
                    <div className={style.logo_content}>
                        <header>
                        EASY RETURNS
                        </header>
                        <p>15-Day Return Policy</p>
                    </div>
                </div>
                <div className={style.achievements}>
                    <div className={style.logo}>
                        <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg" />
                    </div>
                    <div className={style.logo_content}>
                        <header>
                        100% AUTHENTIC
                        </header>
                        <p>Products Sourced Directly</p>
                    </div>
                </div>
                <div className={style.achievements}>
                    <div className={style.logo}>
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg" />
                    </div>
                    <div className={style.logo_content}>
                        <p>
                        2400+ BRANDS
                        </p>
                        <p>1.9 Lakh+ Products</p>
                    </div>
                </div>
            </div>
            <div className={style.footer_social}>
                <h3>Show us some love ❤ on social media <i class='bx bxs-heart'></i> SOCIAL MEDIA</h3>
                <ul class="flex">
                <i class="fa-brands fa-instagram-square"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
                                 </ul>
            </div>
        </div>
)

export default FooterSocial;