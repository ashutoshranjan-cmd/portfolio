// import { motion, AnimatePresence } from 'framer-motion';
// import { X } from 'lucide-react';
// import { ProjectType } from '../types/project';

// interface ProjectModalProps {
//   project: ProjectType | null;
//   onClose: () => void;
// }

// export function ProjectModal({ project, onClose }: ProjectModalProps) {
//   if (!project) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.9, opacity: 0 }}
//           className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-2xl font-bold">{project.title}</h3>
//             <button
//               onClick={onClose}
//               className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>
          
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-64 object-cover rounded-lg mb-6"
//           />
          
//           <div className="space-y-4">
//             <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            
//             <div>
//               <h4 className="font-semibold mb-2">Technologies Used:</h4>
//               <div className="flex flex-wrap gap-2">
//                 {project.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-2">Key Features:</h4>
//               <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
//                 {project.features?.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ProjectType } from '../types/project';

interface ProjectModalProps {
  project: ProjectType | null;
  
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>

            <div>
              <h4 className="font-semibold mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                {project.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Demo and Source Code Buttons */}
            <div className="flex justify-start gap-4 mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
              >
                Source Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
