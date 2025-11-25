// --- Vercel Serverless Function: /api/send-email ---

import { Resend } from 'resend';

// Initialize Resend securely using the environment variable
// Vercel securely injects this variable at runtime.
const resend = new Resend(process.env.RESEND_API_KEY);

// Your target email address
const TARGET_EMAIL = 'desireesoronio@gmail.com';

/**
 * Vercel serverless function handler.
 * @param {object} req - Incoming request object (contains form data in body)
 * @param {object} res - Response object
 */
export default async function (req, res) {
    // 1. Validate request method
    if (req.method !== 'POST') {
        // HTTP 405 Method Not Allowed
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // 2. Destructure and validate incoming data from the React form
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        // HTTP 400 Bad Request
        return res.status(400).json({ message: 'Missing required form fields.' });
    }

    // 3. Construct the HTML email content
    const emailHtml = `
        <html>
            <body style="font-family: sans-serif; line-height: 1.6;">
                <h2 style="color: #db0a0a;">New Contact Form Submission</h2>
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr style="border: 0; border-top: 1px solid #ccc;">
                <h3 style="margin-top: 20px;">Message:</h3>
                <div style="padding: 15px; border: 1px solid #eee; background-color: #f9f9f9; border-radius: 8px;">
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
                <p style="margin-top: 30px; font-size: 0.8em; color: #777;">
                    This message was sent from your portfolio contact form.
                </p>
            </body>
        </html>
    `;

    try {
        // 4. Send the email using Resend
        const data = await resend.emails.send({
            from: 'Your Verified Sender <onboarding@resend.dev>', 
            to: TARGET_EMAIL, 
            reply_to: email, 
            subject: `[Portfolio Inquiry] ${subject}`,
            html: emailHtml,
        });

        // 5. Send a success response back to the React frontend
        // HTTP 200 OK
        return res.status(200).json({ 
            message: 'Email sent successfully!', 
            resendId: data.id 
        });

    } catch (error) {
        // 6. Handle Resend API errors and send a detailed error to the client
        console.error('Resend Error:', error);
        // HTTP 500 Internal Server Error
        return res.status(500).json({ 
            message: 'Failed to send email due to a server error.' 
        });
    }
}