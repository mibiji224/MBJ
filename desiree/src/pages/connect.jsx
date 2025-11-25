// --- Vercel Serverless Function: /api/send-email ---

import { Resend } from 'resend';

// Initialize Resend securely using the environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

// Your target email address
const TARGET_EMAIL = 'desireesoronio@gmail.com';

/**
 * Vercel serverless function handler.
 */
export default async function (req, res) {
    // 1. Validate request method
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // 2. Destructure and validate incoming data
    const { name, email, subject, message } = req.body;

    // DEBUGGING: This log will appear in your Vercel Dashboard > Logs.
    // It helps verify that the 'email' variable actually contains data.
    console.log("Processing email submission from:", email);

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'Missing required form fields.' });
    }

    // 3. Construct the HTML email content
    // UPDATED: Added a dedicated "Reply" button inside the email body as a failsafe.
    const emailHtml = `
        <html>
            <body style="font-family: sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #db0a0a;">New Contact Form Submission</h2>
                
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                    <p style="margin: 0;"><strong>Name:</strong> ${name}</p>
                    <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #db0a0a; text-decoration: none;">${email}</a></p>
                    <p style="margin: 0;"><strong>Subject:</strong> ${subject}</p>
                </div>

                <h3 style="margin-top: 20px;">Message:</h3>
                <div style="padding: 15px; border: 1px solid #eee; background-color: #ffffff; border-radius: 8px;">
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>

                <!-- Fallback Reply Button: Works even if Reply-To header is stripped -->
                <div style="margin-top: 30px; text-align: center;">
                    <a href="mailto:${email}?subject=Re: ${subject}" style="background-color: #333; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Reply to ${name}</a>
                </div>
                
                <p style="margin-top: 30px; font-size: 0.8em; color: #777; text-align: center;">
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
            
            // We keep the standard reply_to property. 
            // Note: If this is ignored by Gmail, use the button in the body (added above).
            // Once you verify your own domain (e.g. contact@yourname.com), this header will work 100% of the time.
            reply_to: email, 
            
            subject: `[Desiree Soronio] ${subject}`,
            html: emailHtml,
        });

        // 5. Send success response
        return res.status(200).json({ 
            message: 'Email sent successfully!', 
            resendId: data.id 
        });

    } catch (error) {
        console.error('Resend Error:', error);
        return res.status(500).json({ 
            message: 'Failed to send email due to a server error.' 
        });
    }
}