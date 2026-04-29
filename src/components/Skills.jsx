import { motion } from 'framer-motion';
import {
  SiPython,
  SiCplusplus,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiFlask,
  SiDjango,
  SiHtml5,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiReact,
} from 'react-icons/si';
import { FaCss3Alt, FaCloud } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', icon: <SiPython />, level: 90 },
        { name: 'C++', icon: <SiCplusplus />, level: 75 },
      ],
    },
    {
      category: 'ML & Data Science',
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 85 },
        { name: 'Keras', icon: <SiKeras />, level: 85 },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 80 },
        { name: 'Pandas', icon: <SiPandas />, level: 90 },
        { name: 'NumPy', icon: <SiNumpy />, level: 88 },
        { name: 'OpenCV', icon: <SiOpencv />, level: 82 },
      ],
    },
    {
      category: 'Backend & Web',
      skills: [
        { name: 'Flask', icon: <SiFlask />, level: 85 },
        { name: 'Django', icon: <SiDjango />, level: 80 },
        { name: 'React', icon: <SiReact />, level: 75 },
        { name: 'HTML/CSS', icon: <FaCss3Alt />, level: 85 },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, level: 80 },
        { name: 'Firebase', icon: <SiFirebase />, level: 78 },
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'Azure', icon: <FaCloud />, level: 75 },
        { name: 'Git', icon: <SiGit />, level: 88 },
        { name: 'GitHub', icon: <SiGithub />, level: 88 },
        { name: 'Vercel', icon: <SiVercel />, level: 70 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skill-category glass-card"
              variants={categoryVariants}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          className="soft-skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="soft-skills-title">Core Competencies</h3>
          <div className="soft-skills-list">
            {['Problem-solving', 'Fast Learner', 'Adaptability', 'Team Collaboration', 'Critical Thinking', 'Attention to Detail'].map(
              (skill, index) => (
                <motion.div
                  key={index}
                  className="soft-skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                >
                  {skill}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;