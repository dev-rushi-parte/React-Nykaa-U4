import style from  './Footer.module.css';
// import './Footer1.css';
const FooterLinks = () => (
    <div className={style.footer_links }>
        {/* onlyflex */}
            <div className={style.nykaa_goal}>
                <header>
                    <h2 className={style.nyka}>NYKAA</h2>
                </header>
                <ul>
                    <li>WHO ARE WE?</li>
                    <li>CAREERS</li>
                    <li>AUTHENTICITY</li>
                    <li>PRESS</li>
                    <li>TESTIMONIALS</li>
                    <li>NYKAA CSR</li>
                    <li>RESPONSIBLE DISCLOSURE</li>
                </ul>
            </div>
            <div className={style.footer_help}>
                <h3 className={style.nyka}>HELP</h3>
                <ul>
                    <li>CONTACT US</li>
                    <li>FREQUENTLY ASKED QUESTIONS</li>
                    <li>STORE LOCATOR</li>
                    <li>CANCELLATION & RETURN</li>
                    <li>SHIPPING & DELIVERY</li>
                </ul>
            </div>
            <div className={style.footer_inspire}>
                <h3 className={style.nyka}>INSPIRE ME</h3>
                <ul>
                    <li>BEAUTY BOOK</li>
                    <li>NYKAA TV</li>
                    <li>NYKAA NETWORK</li>
                    <li>ROUTINE FINDER</li>
                    <li>BUYING GUIDES</li>
                </ul>
            </div>
            <div className={style.quick_links}>
                <h3 className={style.nyka}>
                    QUICK LINKS
                </h3>
                <ul>
                    <li>OFFER ZONE</li>
                    <li>NEW LAUNCHES</li>
                    <li>NYKAA MAN</li>
                    <li>NYKAA FASHION</li>
                    <li>NYKAA PRO</li>
                    <li>NYKAA FEMINA BEAUTY AWARDS WINNERS 2019</li>
                    <li>SITEMAP</li>
                </ul>
            </div>
            <div className={style.top_categories}>
                <h3 className={style.nyka}>TOP CATEGORIES</h3>
                <div className={style.onlyflex}>
                    <ul className={style.top_categories}>
                        <li>MAKEUP</li>
                        <li>SKIN</li>
                        <li>HAIR</li>
                        <li>PERSONAL CARE</li>
                        <li>APPLIANCES</li>
                        <li>MOM AND BABY</li>
                        <li>WELLNESS</li>
                        <li>FRAGRANCE</li>
                        <li>NATURAL</li>
                        <li>LUXE</li>
                     </ul>
                </div>
            </div>
        </div>
)

export default FooterLinks;