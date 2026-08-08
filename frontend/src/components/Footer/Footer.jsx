import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <p className="footer-text">
            © 2026 <span className="footer-name">Dipak Raj Bhatt </span>.   All Rights Reserved.
          </p>

        </div>

        <div className="footer-right">

          <div className="footer-message">
            <h4>Thanks for Visiting </h4>
            
          </div>

          <a
            href="#home"
            className="back-to-top"
            title="Back to Top"
          >
            ↑
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;