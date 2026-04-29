import { motion } from 'framer-motion';
import { FiAward, FiCode, FiTrendingUp, FiTarget } from 'react-icons/fi';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FiCode />,
      title: 'Full-Stack ML',
      description: 'End-to-end ML pipelines from data preprocessing to model deployment',
    },
    {
      icon: <FiAward />,
      title: 'Certified Professional',
      description: 'Azure AI-900 certified with expertise in cloud AI services',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Production Experience',
      description: 'Real-world backend and ML deployment at ParallelDots & SmartED',
    },
    {
      icon: <FiTarget />,
      title: 'Problem Solver',
      description: 'Passionate about translating complex problems into elegant solutions',
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="about-heading">
              Building Intelligent Solutions with{' '}
              <span className="gradient-text">Code & Data</span>
            </h3>

            <p className="about-paragraph">
              I'm a 2025 MCA graduate from SHUATS Prayagraj with a strong foundation in
              AI/ML and backend engineering. My journey in tech has been driven by a
              passion for transforming complex data into actionable insights and building
              scalable, production-ready applications.
            </p>

            <p className="about-paragraph">
              During my internships at <strong>ParallelDots</strong> and{' '}
              <strong>SmartED</strong>, I gained hands-on experience in testing backend
              APIs for production systems, building sentiment analysis pipelines, and
              deploying machine learning models. I've worked extensively with Python,
              TensorFlow, Flask, and Django to create end-to-end solutions.
            </p>

            <p className="about-paragraph">
              What excites me most is the intersection of machine learning and software
              engineering—taking models from notebooks to production, optimizing
              performance, and ensuring reliability at scale. I'm currently seeking
              opportunities as an ML Engineer, AI Engineer, or Python Backend Developer
              where I can contribute to impactful projects and continue growing.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="highlight-card glass-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="highlight-icon">{item.icon}</div>
                  <h4 className="highlight-title">{item.title}</h4>
                  <p className="highlight-description">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="image-wrapper">
              <div className="image-border"></div>
              <div className="image-content">
                <div className="profile-placeholder">
                  <div className="placeholder-icon">VS</div>
                </div>
              </div>
            </div>

            <div className="about-facts">
              <div className="fact-item">
                <span className="fact-label">Location</span>
                <span className="fact-value">Prayagraj, India</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Education</span>
                <span className="fact-value">MCA, SHUATS</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Status</span>
                <span className="fact-value">Open to Work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;