import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <footer className="footer">
                <div className="footer__addr">
                    <h1 className="footer__logo">TechSkillsIT</h1>
                    <h2>Contact</h2>
                    <address>
                    D102,  
Times Square building,  
Marol naka
Andheri East , Mumbai - 400059<br />
                        <a className="footer__btn" href="mailto:info@techskillsit.com">Email Us</a>
                    </address>
                </div>
                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title">Learning Tracks</h2>
                        <ul className="nav__ul">
                            <li><a href="#">Java with MySQL</a></li>
                            <li><a href="#">Professional Spring Boot Dev</a></li>
                            <li><a href="#">Mearn Stack</a></li>
                            <li><a href="#">Mean Stack</a></li>
                        </ul>
                    </li>
                    <li className="nav__item nav__item--extra">
                        <h2 className="nav__title">Courses</h2>
                        <ul className="nav__ul nav__ul--extra">
                            <li><a href="#">Java OOPs</a></li>
                            <li><a href="#">C Programming</a></li>
                            <li><a href="#">SQL programming</a></li>
                            <li><a href="#">React.Js</a></li>
                            <li><a href="#">Professional Spring Boot</a></li>
                             
                        </ul>
                    </li>
                    <li className="nav__item">
                        <h2 className="nav__title">Legal</h2>
                        <ul className="nav__ul">
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-conditions">Terms of Use</Link></li>
                         </ul>
                    </li>
                </ul>
                <div className="legal">
                    <p>&copy; 2024 TechSkillsIT. All rights reserved.</p>
                    <div className="legal__links">
                        <span>Made with <span className="heart">♥</span> Using React and Spring</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
