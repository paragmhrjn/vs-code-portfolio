import { useState } from 'react';
import { useTheme, ThemeProvider } from './ThemeContext';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectSection';
import SkillsSection from './SkillSection';
import ContactSection from './ContactSection';
import { GitBranch, CheckCircle, Sun, Moon, User, Folder, Code, Mail} from 'lucide-react';
import PreviewPanel from './PreviewPanel';
const projects = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "Real-time analytics dashboard with React and WebSockets",
        tech: "React, Tailwind, Node.js",
        preview: "dashboard-preview"
    },
    {
        id: 2,
        title: "Travel Planner App",
        description: "Interactive travel itinerary builder with map integration",
        tech: "React, Mapbox, Firebase",
        preview: "travel-preview"
    },
    {
        id: 3,
        title: "Fitness Tracker",
        description: "Workout tracking app with progress visualization",
        tech: "React Native, GraphQL, MongoDB",
        preview: "fitness-preview"
    },
    {
        id: 4,
        title: "Recipe Finder",
        description: "AI-powered recipe discovery with dietary filters",
        tech: "React, TensorFlow.js, Express",
        preview: "recipe-preview"
    }
];

const MainApp = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [preview, setPreview] = useState(null);
    const { theme, toggleTheme }= useTheme();

    const sections = [
        { id: 'about', label: 'About', icon: User, file: 'about.js' },
        { id: 'projects', label: 'Projects', icon: Folder, file: 'projects.jsx' },
        { id: 'skills', label: 'Skills', icon: Code, file: 'skills.ts' },
        { id: 'contact', label: 'Contact', icon: Mail, file: 'contact.html' }
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'about': return <AboutSection />;
            case 'projects': return <ProjectsSection setPreview={setPreview} />;
            case 'skills': return <SkillsSection />;
            case 'contact': return <ContactSection />;
            default: return <AboutSection />;
        }
    };

    return (
        <div className={`flex flex-col h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} font-mono`}>
            {/* Menu Bar */}
            <div className={`flex items-center justify-between px-4 py-2 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'} border-b text-sm`}>
                {/* Menu bar content */}
                <div className="flex space-x-4">
                    {['File', 'Edit', 'View', 'Help'].map(item => (
                        <button key={item} className={`${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>
                            {item}
                        </button>
                    ))}
                </div>
                <div className="text-sm">Parag Chandra Maharjan - VS Code Portfolio - Frontend Engineer</div>
                <div></div>
            </div>

            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden">
                {/* Activity Bar */}
                <div className={`w-16 flex flex-col items-center py-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    {sections.map(section => (
                        <button
                            key={section.id}
                            className={`p-3 my-1 rounded-lg transition-all ${activeSection === section.id
                                ? 'text-blue-400 bg-gray-700'
                                : `${theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`
                                }`}
                            onClick={() => setActiveSection(section.id)}
                            title={section.label}
                        >
                            <section.icon size={20} />
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* File Tabs */}
                    <div className={`flex ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'} border-b`}>
                        {sections.map(section => (
                            <button
                                key={section.id}
                                className={`px-4 py-2 text-sm border-t-2 transition-colors ${activeSection === section.id
                                    ? 'border-blue-400 bg-opacity-10'
                                    : 'border-transparent'
                                    }`}
                                onClick={() => setActiveSection(section.id)}
                            >
                                {section.file}
                            </button>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 overflow-x-auto scrollbar-custom p-6">
                        {renderContent()}
                    </div>
                </div>

                {/* Preview Panel */}
                <PreviewPanel preview={preview} setPreview={setPreview} />
            </div>

            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 py-2 bg-ui-primary text-xs text-text-primary border-t border-border-primary">
                {/* Status bar content */}
                <div className="flex items-center space-x-4">
                    <span>main</span>
                    <span className="flex items-center">
                        <GitBranch size={12} className="mr-1" /> feature/portfolio
                    </span>
                    <span className="flex items-center text-green-400">
                        <CheckCircle size={12} className="mr-1" /> ESLint
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className={`flex items-center ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}
                    >
                        {theme === 'dark' ? <Sun size={12} className="mr-1" /> : <Moon size={12} className="mr-1" />}
                        {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
                    </button>
                    <span>Frontend Engineer</span>
                    <span>UTF-8</span>
                    <span>JavaScript</span>
                </div>
            </div>
        </div>
    );
};

export default function MainContainer() {
    return (
        <ThemeProvider>
            <MainApp />
        </ThemeProvider>
    );
};
