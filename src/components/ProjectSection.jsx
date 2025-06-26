import { useState } from 'react';
import { useTheme } from './ThemeContext';
import motion from './animationcomponent/AnimationComponent';
import { projects } from '../data/projectList';
const ProjectsSection = ({ setPreview }) => {
    const { theme } = useTheme();
    const [expandedId, setExpandedId] = useState(null);
    const [clicked, setClicked] = useState(false);

    const handleClick = (id) => {
        // Animate
        setClicked(id);
        setTimeout(() => setClicked(null), 300); // reset click effect after 300ms

        // Toggle expansion
        setExpandedId(id === expandedId ? null : id);
    };
  
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <h1 className="text-3xl font-bold mb-6 text-blue-400">Projects</h1>
            {/* Rest of the ProjectsSection content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg border cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${clicked === project.id ? 'scale-105 shadow-lg' : ''
                            }`}
                        onClick={() => handleClick(project.id) }
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="font-bold text-lg text-blue-400">{project.title}</h3>
                                <div className="flex flex-wrap gap-1">
                                    {project.tech.slice(0, 2).map((tech, idx) => (
                                        <span key={idx} className={`text-xs px-2 py-1 ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} rounded`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                                {project.description}
                            </p>

                            {expandedId === project.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-3"
                                >
                                    <div className="flex flex-wrap gap-1">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className={`text-xs px-2 py-1 ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} rounded`}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-3">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setPreview(project.preview);
                                            }}
                                            className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
                                        >
                                            Live Preview
                                        </button>
                                        <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded text-sm hover:bg-blue-50 transition-colors">
                                            Source Code
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectsSection;