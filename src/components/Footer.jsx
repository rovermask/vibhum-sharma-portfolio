import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content container">
        <motion.div
          className="footer-main"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="gradient-text">Vibhum Sharma</span>
            </h3>
            <p className="footer-tagline">
              AI/ML Engineer | Python Developer | Building Intelligent Solutions
            </p>
            <div className="footer-social">
              <motion.a
                href="https://github.com/rovermask"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/vibhum-sharma-10j"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a
                href="mailto:vibhum10sharma@gmail.com"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <FiMail />
              </motion.a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Get In Touch</h4>
            <ul>
              <li>
                <a href="mailto:vibhum10sharma@gmail.com">vibhum10sharma@gmail.com</a>
              </li>
              <li>
                <a href="tel:+919696177580">+91-9696177580</a>
              </li>
              <li>Prayagraj, India</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="copyright">
            © {currentYear} Vibhum Sharma. All rights reserved.
          </p>
          <p className="footer-heart">
            Made with <FiHeart className="heart-icon" /> and lots of coffee ☕
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;