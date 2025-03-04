
import * as l from '../../../Constants/urls';
export default function Header() {
    return (
        <header id="header" className="header">
            <div className="header__container">
                <a href="index.html" className="header__logo"><strong>Fundraise</strong> Donate Today</a>
                <nav className="header__nav">
                    <ul className="header__icons">
                        <li><a href="/login" className="header__link"><span className="header__label">Login</span></a></li>
                        <li><a href="/login" className="header__link"><span className="header__label">Login as Admin</span></a></li>
                        <li><a href="/register" className="header__link"><span className="header__label">Register</span></a></li>
                        <li><a href="/about" className="header__link"><span className="header__label">About Us</span></a></li>
                        <li><a href="/contact" className="header__link"><span className="header__label">Contact</span></a></li>
                        <li><a href="/donate" className="header__link header__link--highlight"><span className="header__label">Donate</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
