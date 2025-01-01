// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useState, useEffect } from "react";
// import { ProjectType } from "../types/project";
// import { ProjectModal } from "./ProjectModal";

// interface ProjectCarouselProps {
//   projects: ProjectType[];
// }

// export function ProjectCarousel({ projects }: ProjectCarouselProps) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
//     null
//   );
//   const [direction, setDirection] = useState(0);
//   const [projectsPerPage, setProjectsPerPage] = useState(3);

//   useEffect(() => {
//     const updateProjectsPerPage = () => {
//       if (window.innerWidth < 768) {
//         setProjectsPerPage(1);
//       } else if (window.innerWidth < 1024) {
//         setProjectsPerPage(2);
//       } else {
//         setProjectsPerPage(3);
//       }
//     };

//     updateProjectsPerPage();
//     window.addEventListener("resize", updateProjectsPerPage);
//     return () => window.removeEventListener("resize", updateProjectsPerPage);
//   }, []);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrentIndex((prev) =>
//       prev + projectsPerPage >= projects.length ? 0 : prev + projectsPerPage
//     );
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) =>
//       prev - projectsPerPage < 0
//         ? Math.max(0, projects.length - projectsPerPage)
//         : prev - projectsPerPage
//     );
//   };

//   const visibleProjects = projects.slice(
//     currentIndex,
//     currentIndex + projectsPerPage
//   );

//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//   };

//   return (
//     <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
//       <div className="flex items-center">
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={prevSlide}
//           className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg absolute left-2 sm:left-4 z-10"
//         >
//           <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//         </motion.button>

//         <AnimatePresence initial={false} custom={direction} mode="wait">
//           <motion.div
//             key={currentIndex}
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               x: { type: "spring", stiffness: 300, damping: 30 },
//               opacity: { duration: 0.2 },
//             }}
//             className="w-full"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
//               {visibleProjects.map((project, index) => (
//                 <motion.div
//                   key={project.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
//                   onClick={() => setSelectedProject(project)}
//                 >
//                   <div className="aspect-w-16 aspect-h-9">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
//                     />
                  
//                   </div>
                 
//                   <div className="p-4 sm:p-6">
//                     <h3 className="text-lg sm:text-xl font-semibold mb-2">
//                       {project.title}
                      
//                     </h3>
                   
//                     <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {project.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="px-2 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={nextSlide}
//           className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg absolute right-2 sm:right-4 z-10"
//         >
//           <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//         </motion.button>
//       </div>

//       <ProjectModal
//         project={selectedProject}
//         onClose={() => setSelectedProject(null)}
//       />
//     </div>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ProjectType } from "../types/project";
import { ProjectModal } from "./ProjectModal";

interface ProjectCarouselProps {
  projects: ProjectType[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [direction, setDirection] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.innerWidth < 768) {
        setProjectsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setProjectsPerPage(2);
      } else {
        setProjectsPerPage(3);
      }
    };

    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);
    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev + projectsPerPage >= projects.length ? 0 : prev + projectsPerPage
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev - projectsPerPage < 0
        ? Math.max(0, projects.length - projectsPerPage)
        : prev - projectsPerPage
    );
  };

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + projectsPerPage
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg absolute left-2 sm:left-4 z-10"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-sm sm:text-base"
                      >
                        Source Code
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:underline text-sm sm:text-base"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg absolute right-2 sm:right-4 z-10"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
