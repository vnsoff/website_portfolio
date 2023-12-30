// src/components/Contact.js

import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div id="contact" className="bg-custom-bg-color py-16">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold mb-8 text-gray-200 text-center">
                    Contact
                </h2>
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 rounded-lg shadow-lg">
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
