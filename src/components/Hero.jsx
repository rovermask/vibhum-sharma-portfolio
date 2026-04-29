import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const handleDownloadResume = () => {
    // In a real scenario, you'd link to your actual resume PDF
    window.open('/resume.pdf', '_blank');
  };

  const handleContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-gradient"></div>
      </div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          <span className="badge-dot"></span>
          Available for opportunities
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Hi, I'm <span className="gradient-text">Vibhum Sharma</span>
        </motion.h1>

        <motion.div className="hero-subtitle" variants={itemVariants}>
          <span className="typing-text">AI/ML Engineer</span>
          <span className="subtitle-divider">|</span>
          <span className="typing-text">Python Developer</span>
        </motion.div>

        <motion.p className="hero-description" variants={itemVariants}>
          Transforming complex data into intelligent solutions. Specialized in building
          end-to-end ML pipelines, computer vision systems, and scalable backend
          applications with production-grade deployment.
        </motion.p>

        <motion.div className="hero-stats" variants={itemVariants}>
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Internships</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Certifications</span>
          </div>
        </motion.div>

        <motion.div className="hero-cta" variants={itemVariants}>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactClick}
          >
            Get In Touch
            <FiArrowRight />
          </motion.button>

          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
          >
            <FiDownload />
            Download Resume
          </motion.button>
        </motion.div>

        <motion.div className="hero-social" variants={itemVariants}>
          <motion.a
            href="https://github.com/rovermask"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#00d9ff' }}
            transition={{ duration: 0.2 }}
          >
            <FiGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/vibhum-sharma-10j"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#00d9ff' }}
            transition={{ duration: 0.2 }}
          >
            <FiLinkedin />
          </motion.a>
          <motion.a
            href="mailto:vibhum10sharma@gmail.com"
            whileHover={{ y: -5, color: '#00d9ff' }}
            transition={{ duration: 0.2 }}
          >
            <FiMail />
          </motion.a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="scroll-line"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;