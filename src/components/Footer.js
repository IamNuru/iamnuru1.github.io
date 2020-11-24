import React from 'react'
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import whatsapp from '../images/whatsapp.png';
import phone from '../images/phone.png';
import gmail from '../images/gmail.png';

function Footer() {
    return (
        <footer className="site-footer" id="social">
            <table className="w-100">
                <thead>
                    <tr>
                        <th>
                           Contact Me Via; 
                        </th>
                    </tr>
                </thead>
                <tbody className="footer-table-body">
                    <tr className="d-grid">
                        <td>
                            <div> <img src={linkedin} alt="LinkIn" /> </div>
                            <div className="social-desc" title="">LinkIn</div>
                        </td>
                        <td>
                            <a href="https://www.facebook.com/abdulai.nurudeen.370/">
                                <div> <img src={facebook} alt="Facebook" /> </div>
                                <div className="social-desc" title="">Facebook</div>
                            </a>
                        </td>
                        <td>
                            <a href="https://twitter.com/intent/tweet?screen_name=mr_nuru_deen">
                                <div> <img src={twitter} alt="Twitter" /> </div>
                                <div className="social-desc" title="Twitter">Twitter</div>
                            </a>
                        </td>
                        <td>
                            <a href="https://wa.me/+233543027058?text=Hello%20Nurudeen,">
                                <div> <img src={whatsapp} alt="WhatsApp" /> </div>
                            <div className="social-desc" title="WhatsApp">WhatsApp</div>
                            </a>
                        </td>
                        <td>
                            <div> <img src={gmail} alt="Gmail" /> </div>
                            <div className="social-desc" title="abdulainurudeentitiaka@gmail.com"> abdulainurudeentitiaka@gmail.com</div>
                        </td>
                        <td>
                            <div> <img src={phone} alt="Phone" /> </div>
                            <div className="social-desc" title="+233(0)543027058">+233(0)543027058</div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            <hr className="footer-hr" />
            <div className="copyright" >&copy;nurudeen. All right Reserved</div>
        </footer>
    )
}

export default Footer;
