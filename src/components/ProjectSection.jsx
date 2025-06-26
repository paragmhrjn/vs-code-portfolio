import { useState } from 'react';

const ProjectsSection = ({ projects, setPreview }) => {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-accent-primary">Projects</h1>
            {/* Rest of the ProjectsSection content */}
        </div>
    );
};

export default ProjectsSection;