import style from  './Footer.module.css';
const Copyright = () => (
    <div className={style.footer_copyright_container}>
        <div className={style.legal_container }>
            {/* flex */}
            <h3>TERMS & CONDITIONS</h3>
            <h3>SHIPPING POLICY</h3>
            <h3>CANCELLATION POLICY</h3>
            <h3>PRIVACY POLICY</h3>
        </div>
        <p>© 2021 Nykaa E-Retail Pvt. Ltd. All Rights Reserved</p>
    </div>
) 

export default Copyright;