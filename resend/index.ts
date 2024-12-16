"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const { fullName, email, phone, subject, message } = req.body;

            // Send email using Resend
            const data = await resend.emails.send({
                from: 'Contact Form <your@email.com>', // Replace with your verified sender email
                to: 'inhalebaysmokeshop@gmail.com', // Replace with your receiving email
                subject: subject || "New Contact Form Submission",
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Full Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                    <p><strong>Message:</strong> ${message}</p>
                `,
            });

            res.status(200).json({ success: true, data });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Failed to send email" });
        }
    } else {
        res.status(405).json({ success: false, message: "Method not allowed" });
    }
}