import React from 'react';
import { User } from 'lucide-react';
import { useTheme } from './ThemeContext';
import motion from './animationcomponent/AnimationComponent';
const AboutSection = () => {
    const { theme } = useTheme();

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">About Me</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg p-4 border-2 border-dashed ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'}`}>
                        <div className="w-full h-48 flex items-center justify-center text-gray-500">
                            <User size={64} />
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-blue-400">John Doe</h2>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                        Senior Frontend Engineer with 8+ years of experience building modern web applications.
                        Specialized in React ecosystem and performance optimization.
                    </p>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                        Passionate about creating intuitive user interfaces with clean, maintainable code.
                        Strong advocate for accessibility and responsive design principles.
                    </p>
                </div>
            </div>

            <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} p-4 rounded-lg border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto font-mono">
                    {`const developer = {
  name: "John Doe",
  role: "Senior Frontend Engineer",
  skills: ["React", "TypeScript", "Tailwind CSS", "GraphQL"],
  experience: "8+ years",
  location: "San Francisco, CA",
  passions: ["UI/UX Design", "Performance Optimization", "Accessibility"],
  availability: "Open to new opportunities"
};`}
                </pre>
            </div>
        </motion.div>
    );
};

export default AboutSection;
