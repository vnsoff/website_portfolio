// src/components/Contact.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [emailSent, setEmailSent] = useState(null);  // Remove the initial value of false

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceID = process.env.REACT_APP_SERVICE_ID;
        const templateID = process.env.REACT_APP_TEMPLATE_ID;
        const userID = process.env.REACT_APP_PUBLIC_KEY;

        try {
            const result = await emailjs.sendForm(serviceID, templateID, e.target, userID);
            console.log(result.text);
            setFormData({ name: '', email: '', message: '' });
            setEmailSent(true);
        } catch (error) {
            console.log(error.text);
            setEmailSent(false);
        }

    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };




    return (
        <div id="contact" className="bg-custom-bg-color py-16">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold mb-8 text-gray-200 text-center">
                    Contact
                </h2>
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 rounded-lg">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-200 text-sm font-semibold mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded bg-gray-200 text-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-200 text-sm font-semibold mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded bg-gray-200 text-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-gray-200 text-sm font-semibold mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded bg-gray-200 text-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="mx-auto text-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform"
                        >
                            Send Message
                        </button>
                        {emailSent && (
                            <p className="text-green-500 text-center mt-3">
                                Email sent successfully to the user!
                            </p>
                        )}
                        {!emailSent && emailSent !== null && (
                            <p className="text-red-500 text-center mt-3">
                                Failed to send email. Please try again.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
