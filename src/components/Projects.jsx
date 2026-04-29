import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Tuberculosis Detection using CNN',
      description:
        'Designed and trained a Convolutional Neural Network to classify chest X-ray images as tuberculosis-positive or normal, using preprocessing and data augmentation to improve model robustness. Deployed as a Flask-based web service on Render for real-time inference.',
      technologies: ['TensorFlow', 'Keras', 'Flask', 'Render', 'Computer Vision'],
      github: 'https://github.com/rovermask/TB-Detection',
      live: 'https://your-deployed-link.com',
      duration: 'Feb 2025 – Apr 2025',
      featured: true,
    },
    {
      title: 'WatchBuddy',
      description:
        'Developed a web application to track and manage movies, series, and books, integrating external APIs like TMDB and GoogleBooks. Designed a clean, user-friendly interface in React with Firebase for data persistence.',
      technologies: ['React', 'REST APIs', 'Firebase', 'TMDB API', 'GoogleBooks API'],
      github: 'https://github.com/rovermask',
      live: 'https://your-deployed-link.com',
      duration: 'Jul 2025 – Sept 2025',
      featured: true,
    },
    {
      title: 'AirCanvas',
      description:
        'Implemented a real-time virtual drawing application using hand-gesture recognition and webcam input for touch-free interaction. Optimized gesture tracking and rendering pipelines for smooth drawing performance.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
      github: 'https://github.com/rovermask',
      duration: 'Sept 2024 – Dec 2024',
      featured: false,
    },
    {
      title: 'CryptYourMind',
      description:
        'Developed an educational web platform demonstrating core cryptographic algorithms through interactive encryption and decryption tools. Implemented user workflows using Django with emphasis on clarity and usability.',
      technologies: ['Django', 'Python', 'HTML/CSS', 'Cryptography'],
      github: 'https://github.com/rovermask',
      duration: 'Oct 2022 – Apr 2023',
      featured: false,
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card glass-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {project.featured && <div className="featured-badge">Featured</div>}

              <div className="project-header">
                <div className="project-icon">
                  <FiCode />
                </div>
                <div className="project-links">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink />
                    </motion.a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-duration">{project.duration}</p>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;