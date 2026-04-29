import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
      issuer: 'Microsoft',
      date: 'Sept 2025',
      description:
        'Validated foundational knowledge of artificial intelligence, machine learning, computer vision, NLP, and conversational AI, with practical exposure to Azure Cognitive Services.',
      skills: ['AI', 'Machine Learning', 'Computer Vision', 'NLP', 'Azure'],
      credentialUrl: '#',
    },
    {
      title: 'Workshop on Agentic AI',
      issuer: 'Eduxlabs, IIT Madras',
      date: 'Aug 2025',
      description:
        'Gained hands-on experience in designing agent-based AI systems capable of reasoning, autonomous decision-making, and task execution.',
      skills: ['Agentic AI', 'AI Systems', 'Autonomous Agents'],
      credentialUrl: '#',
    },
    {
      title: 'Python for Data Science and Machine Learning Bootcamp',
      issuer: 'Udemy',
      date: 'Mar 2025',
      description:
        'Developed practical skills in data analysis, visualization, and machine learning using Pandas, NumPy, Matplotlib, Seaborn, and TensorFlow.',
      skills: ['Python', 'Data Science', 'Machine Learning', 'TensorFlow'],
      credentialUrl: '#',
    },
    {
      title: 'Introduction to Python',
      issuer: 'Microsoft Technology Associate (MTA)',
      date: 'Aug 2021',
      description:
        'Demonstrated proficiency in Python programming fundamentals, algorithmic problem-solving, and scripting for automation tasks.',
      skills: ['Python', 'Programming', 'Algorithms'],
      credentialUrl: '#',
    },
  ];

  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications & Achievements
        </motion.h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="cert-header">
                <div className="cert-icon">
                  <FiAward />
                </div>
                <div className="cert-meta">
                  <div className="cert-issuer">{cert.issuer}</div>
                  <div className="cert-date">
                    <FiCalendar />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-description">{cert.description}</p>

              <div className="cert-skills">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    <FiCheckCircle />
                    {skill}
                  </span>
                ))}
              </div>

              {cert.credentialUrl && (
                <motion.a
                  href={cert.credentialUrl}
                  className="cert-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Credential
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;