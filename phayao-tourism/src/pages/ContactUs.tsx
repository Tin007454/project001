import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactUs: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">If you have any questions or feedback, please fill out the form below:</p>
            <ContactForm />
        </div>
    );
};

export default ContactUs;