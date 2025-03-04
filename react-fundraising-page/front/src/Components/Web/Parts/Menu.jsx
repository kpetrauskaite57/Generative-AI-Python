export default function Menu() {
    return (
        <nav id="menu">
            <header className="major">
                <h2>Menu</h2>
            </header>
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#about">About Us</a></li>
                <li><a href="/#campaigns">Fundraising Campaigns</a></li>
                <li><a href="/#events">Events</a></li>
                <li><a href="/#volunteer">Volunteer</a></li>
                <li><a href="/#contact">Contact Us</a></li>
                <li>
                    <span className="opener">Resources</span>
                    <ul>
                        <li><a href="/#stories">Success Stories</a></li>
                        <li><a href="/#faq">FAQ</a></li>
                        <li><a href="/#blog">Blog</a></li>
                        <li><a href="/#reports">Annual Reports</a></li>
                    </ul>
                </li>
                <li><a href="/#donate">Donate</a></li>
            </ul>
        </nav>
    );
}
