// src/hooks/sendEmail.js
import { useState } from 'react';
import axios from 'axios';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

const useEmailSender = () => {
    const [emailSent, setEmailSent] = useState(null);

    const sendEmail = async (formData) => {
        try {
            const response = await axios.post(
                'https://api.resend.com/emails',
                {
                    from: `Contact Form <${formData.email}>`,
                    to: ['vanfc.dev@gmail.com'], // Replace with your email
                    subject: 'New Contact Form Submission',
                    html: `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Message: ${formData.message}</p>`,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${RESEND_API_KEY}`,
                    },
                }
            );

            if (response.status === 200) {
                console.log('Email sent successfully:', response.data);
                setEmailSent(true);
            } else {
                console.error('Failed to send email:', response.status, response.statusText);
                setEmailSent(false);
            }
        } catch (error) {
            console.error('Error sending email:', error.message);
            setEmailSent(false);
        }
    };

    return { sendEmail, emailSent };
};

export default useEmailSender;
