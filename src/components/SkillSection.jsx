import { useTheme } from "./ThemeContext";
import motion from "./animationcomponent/AnimationComponent";
import { skillsData } from "../data/skillsList";
const SkillsSection = () => {
    const { theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <h1 className="text-3xl font-bold mb-8 text-blue-400">Skills & Expertise</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {skillsData.map((skillGroup, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg p-6 border`}
                    >
                        <h2 className="font-bold text-lg mb-4 text-blue-400">{skillGroup.category}</h2>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, idx) => (
                                <span key={idx} className={`px-3 py-1 ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} rounded text-sm`}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg p-6 border`}
            >
                <h2 className="font-bold text-lg mb-6 text-blue-400">Experience Timeline</h2>
                <div className="space-y-6">
                    {[
                        { title: "Senior Graphic Designer @ JSS Group", period: "2016 - 2017"},
                        { title: "Junior Web Developer @ C.U. Media Pvt. Ltd.", period: "Feb 2015 - Oct 2015"},
                        { title: "Web Designer @ LABA Pvt. Ltd", period: "Apr 2014 - July 2014"}
                    ].map((exp, idx) => (
                        <div key={idx} className="border-l-2 border-blue-400 pl-4 py-2">
                            <h3 className="font-bold">{exp.title}</h3>
                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                {exp.period} | 
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SkillsSection;