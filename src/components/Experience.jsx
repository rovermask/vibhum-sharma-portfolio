import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Backend Intern',
      company: 'ParallelDots',
      location: 'Remote',
      duration: 'Oct 2025 – Jan 2026',
      type: 'Internship',
      responsibilities: [
        'Designed and executed automated and manual test cases for backend APIs supporting the product ShelfWatch, improving API reliability and regression coverage',
        'Collaborated with backend engineers to validate edge cases, error handling, and performance across production-critical endpoints',
        'Gained hands-on experience with RESTful API testing and quality assurance in production environments',
      ],
      technologies: ['Python', 'API Testing', 'RESTful APIs', 'Backend Development'],
    },
    {
      role: 'Data Science & Machine Learning Intern',
      company: 'SmartED',
      location: 'Remote',
      duration: 'Sept 2024 – Dec 2024',
      type: 'Internship',
      responsibilities: [
        'Built an end-to-end sentiment analysis pipeline using NLP techniques, covering data cleaning, feature extraction, model training, and evaluation',
        'Performed exploratory data analysis and visualization using pandas and seaborn to derive actionable insights from social media datasets',
        'Implemented text preprocessing techniques including tokenization, stemming, and vectorization for NLP tasks',
      ],
      technologies: ['Python', 'NLP', 'Pandas', 'Seaborn', 'Machine Learning', 'Data Analysis'],
    },
  ];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-content glass-card">
                <div className="experience-header">
                  <div className="header-left">
                    <div className="role-badge">
                      <FiBriefcase />
                      <span>{exp.type}</span>
                    </div>
                    <h3 className="role-title">{exp.role}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                  </div>
                  <div className="header-right">
                    <div className="meta-info">
                      <FiCalendar />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="meta-info">
                      <FiMapPin />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="experience-body">
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="tech-stack">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;