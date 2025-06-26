import { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (This is a demo)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-accent-primary">Get In Touch</h1>
            {/* Rest of the ContactSection content */}
        </div>
    );
};

export default ContactSection;