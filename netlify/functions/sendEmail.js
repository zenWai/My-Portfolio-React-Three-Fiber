const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const params = JSON.parse(event.body);

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    try {
        let info = await transporter.sendMail({
            from: params.from_email,
            to: process.env.EMAIL_USER,
            subject: 'New message from ' + params.from_name,
            text: params.message,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ statusCode: 200, message: 'Email sent: ' + info.response }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ statusCode: 500, message: 'Error: ' + error.toString() }),
        };
    }
};