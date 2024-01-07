// netlify/functions/sendEmail.js

const { Resend } = require('resend');

exports.handler = async function (event, context) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['vanfc.dev@gmail.com'],
            subject: 'Hello World',
            html: '<strong>it works!</strong>',
        });

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
