import { projects } from "../data/projectList";
import motion from "./animationcomponent/AnimationComponent";
import { useTheme } from "./ThemeContext";
import { Terminal } from "lucide-react";
const PreviewPanel = ({ preview, setPreview }) => {
    const { theme } = useTheme();
    const project = projects.find(p => p.preview === preview);

    if (!preview) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`w-80 ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} border-l flex flex-col`}
        >
            <div className={`flex justify-between items-center p-4 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} border-b`}>
                <h3 className="font-bold">Preview: {project.title}</h3>
                <button
                    onClick={() => setPreview(null)}
                    className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                >
                    ×
                </button>
            </div>
            <div className="p-4 flex-1">
                <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg p-4 mb-4`}>
                    <div className="flex space-x-2 mb-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-green-400 font-mono text-sm">
                        <div>$ npm start</div>
                        <div className="mt-2"> {`>`} Starting development server...</div>
                        <div className="mt-2 text-white">Project running at http://localhost:3000</div>
                    </div>
                </div>
                <div className={`${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300'} border-2 border-dashed rounded-xl w-full h-40 mb-4 flex items-center justify-center`}>
                    <Terminal className="text-gray-500" size={32} />
                </div>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {project.description}
                </p>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">
                        View Project
                    </button>
                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded text-sm hover:bg-blue-50 transition-colors">
                        Source Code
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default PreviewPanel;