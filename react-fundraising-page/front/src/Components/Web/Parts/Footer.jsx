export default function Footer() {

    return (
        <footer id="footer" style={{background: '#f8f9fa', padding: '20px', textAlign: 'center'}}>
            <p className="contact-info">
                <strong>Contact Us:</strong> 
                <br /> Email: <a href="mailto:contact@fundraising.com">contact@fundraisingKentaurai.com</a> 
                <br /> Phone: (123) 456-7890
            </p>
            <p className="social-media">
                <strong>Follow Us:</strong> 
                <br />
                <a href="https://www.facebook.com/fundraisingKentaurai" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                <a href="https://www.twitter.com/fundraisingKentaurai" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                <a href="https://www.instagram.com/fundraisingKentaurai" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
            <p className="donate">
                <strong>Donate:</strong> 
                <br /> Your contributions make a difference. 
                <br /> <a href="http://localhost:3000/#" target="_blank" rel="noopener noreferrer">Click here to donate</a>.
            </p>
            <p className="compliance">
                <small>
                    &copy; {new Date().getFullYear()} Fundraising Initiative. All rights reserved. 
                    <br /> Fundraising Initiative is a 501(c)(3) non-profit organization. 
                    <br /> EIN: 12-3456789
                </small>
            </p>
          
        </footer>
    )
}
