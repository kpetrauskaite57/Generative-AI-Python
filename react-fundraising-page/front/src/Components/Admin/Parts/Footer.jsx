export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="footer__container">
                <div className="footer__about">
                    <h4>About Us</h4>
                    <p>We are a nonprofit organization dedicated to making the world a better place. Learn more about our mission and how you can help.</p>
                </div>
                <div className="footer__links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="footer__social">
                    <h4>Follow Us</h4>
                    <ul className="footer__social-icons">
                        <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <p>&copy; 2024 Fundraise Now. All rights reserved.</p>
            </div>
        </footer>
    );
}