import { useTheme } from './ThemeContext';
import motion from './animationcomponent/AnimationComponent';
import TypingAnimation from './animationcomponent/TypingAnimation';
import CodeTypewriter from './animationcomponent/CodeTyping';
const AboutSection = () => {
    const { theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto p-4 mt-8">
            <h1 className="text-2xl md:text-3xl text-center font-bold mb-6 text-blue-400 uppercase">About Me</h1>

            <div className="w-full mb-6 ">
                
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-blue-400">Parag Chandra Maharjan <span className="wave">👋</span></h2>
                    <div className="flex mt-3 mb-1 text-lg font-mono">
                        Looking for a job
                        <span className="relative flex h-2 w-2 self-center mx-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-95"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span> ||
                        <div className="flex text-blue-100">
                            <TypingAnimation />
                        </div>
                    </div>

                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-justify leading-relaxed`}>
                        I'm a passionate Full-Stack Developer with a heart that beats for Frontend Engineering and UI/UX Design, proficient in HTML, CSS, and JavaScript, and experienced with modern frameworks to build responsive, visually appealing interfaces. I believe that great software isn't just functional—it's beautiful, intuitive, and creates meaningful experiences for users.
                        My design expertise spans tools such as Figma, and Adobe XD, enabling me to create wireframes, prototypes, and high-fidelity designs that are both user-friendly and aesthetically polished.
                    </p>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-justify leading-relaxed`}>
                        Continuously learning and adapting, I stay up-to-date with emerging technologies and trends, driven by a commitment to delivering innovative, efficient, and engaging digital experiences that prioritize both functionality and design.
                    </p>
                </div>
            </div>

            <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} p-4 rounded-lg border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
               <CodeTypewriter/>
            </div>
        </motion.div>
    );
};

export default AboutSection;
