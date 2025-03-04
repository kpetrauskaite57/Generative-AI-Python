import { useRef, useState } from 'react';
import Footer from './Footer';
import Menu from './Menu';

export default function SideBar() {
    const sidebar = useRef();
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSideBar = () => {
        setShowSidebar(b => !b);
    }

    return (
        <div id="sidebar" ref={sidebar} className={showSidebar ? null : 'inactive'}>
            <div className="inner">

                {/* Search */}
                <section id="search" className="alt">
                    <form method="post" action="#">
                        <input type="text" name="query" id="query" placeholder="Search" />
                    </form>
                </section>

                {/* Menu */}
                <Menu />

                {/* Featured Campaigns Section */}
                <section>
                    <header className="major">
                        <h2>Featured Campaigns</h2>
                    </header>
                    <div className="mini-posts">
                        <article>
                            <a href="/#" className="image"><img src="images/campaign1.jpg" alt="Campaign 1" /></a>
                            <p>Help us provide clean water to communities in need.</p>
                        </article>
                        <article>
                            <a href="/#" className="image"><img src="images/campaign2.jpg" alt="Campaign 2" /></a>
                            <p>Support our education initiatives for underprivileged children.</p>
                        </article>
                        <article>
                            <a href="/#" className="image"><img src="images/campaign3.jpg" alt="Campaign 3" /></a>
                            <p>Join us in our mission to protect endangered species.</p>
                        </article>
                    </div>
                    <ul className="actions">
                        <li><a href="/#" className="button">More Campaigns</a></li>
                    </ul>
                </section>

                {/* Contact Section */}
                <section>
                    <header className="major">
                        <h2>Get in Touch</h2>
                    </header>
                    <p>We'd love to hear from you! Whether you have a question about our campaigns, want to volunteer, or anything else, our team is ready to answer all your questions.</p>
                    <ul className="contact">
                        <li className="icon solid fa-envelope"><a href="mailto:contact@fundraising.com">contact@fundraising.com</a></li>
                        <li className="icon solid fa-phone">(123) 456-7890</li>
                        <li className="icon solid fa-home">1234 Charity Lane<br />Hope City, HC 12345</li>
                    </ul>
                </section>

                {/* Footer */}
                <Footer />
            </div>
            <span className="toggle" style={{cursor: 'pointer'}} onClick={toggleSideBar}>Toggle</span>
        </div>
    );
}
