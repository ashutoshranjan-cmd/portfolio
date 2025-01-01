import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server } from 'lucide-react';


const skills = [
  { icon: <Globe className="w-6 h-6" />, title: 'Frontend', items: ['HTML','CSS','React', 'Javascript', 'Tailwind CSS'] },
  { icon: <Server className="w-6 h-6" />, title: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
  { icon: <Database className="w-6 h-6" />, title: 'Database', items: ['MongoDB', 'MySQL', 'FireBase'] },
  { icon: <Code2 className="w-6 h-6" />, title: 'Tools', items: ['Git', 'Vs code', 'Postman','Mongodb Compass'] },
];

export function Skills() {
  return (
    <section className="py-20 px-4">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      
      <div className="max-w-4xl mx-auto mt-20">
        <motion.div 
          className="prose prose-lg dark:prose-invert mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm a passionate Full Stack Developer with expertise in the MERN stack. 
            I love building scalable web applications and solving complex problems through elegant solutions.
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <div className="text-purple-500 dark:text-purple-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600 dark:text-gray-300">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}