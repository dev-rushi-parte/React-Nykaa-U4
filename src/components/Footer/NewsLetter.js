import style from  './Footer.module.css';

// import './Footer1.css';
const NewsLetter = () => (
    <div className={style.footer_newsletter }>
        {/* flex */}
            <div className={style.main_box }>
                {/* flex_col */}
                <div className={style.mail_logo }>
                    {/* flex */}
                    <i class='bx bx-mail-send'></i>
                    <span>GET SPECIAL DISCOUNT IN YOUR INBOX</span>
                </div>
              
                    
                        <input type="email" placeholder=" Your Email" />
                 
                    
                    <button type="submit">
                        SEND
                    </button>
               
            </div>
            <div className={style.app_container}>
                <div className={style.mobile_logo}>
                    {/*  flex */}
                    <i class='bx bx-mobile'></i>
                    <span>  <i class="fa-thin fa-mobile-screen"></i>EXPERIENCE THE NYKAA MOBILE APP</span>
                </div>
                <div className={style.app_logo_container}>
                    <a href="">
                        <img src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg" alt="" />
                    </a>

                    <a href="" className={style.apnaapple}>
                        <img  src="https://www.earfy.net/wp-content/uploads/2016/03/Earfy-download-apple-app-store-768x272.png" alt="" srcset="" />
                    </a>
                </div>
            </div>
            <div className={style.newsletter_contact}>
                {/*  flex */}
                <div className={style.telephone_logo}>
                    <i class='bx bxs-phone'></i>
                </div>
                <div className={style.contact_details }>
                    {/*  flex_col */}
                    <p> 
                        FOR ANY HELP YOU MAY CALL US AT
                        <br />
                        1800-267-4444
                    </p>
                    
                        (Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)
                    
                </div>
            </div>
        </div>
)

export default NewsLetter;