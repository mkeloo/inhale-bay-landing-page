import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { fullName, email, phone, subject, message } = await request.json();

        const data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>", // Verified sender
            to: "inhalebay02@gmail.com",    // Receiving email
            subject: subject || "New Contact Form Submission",
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return Response.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return Response.json(
            { success: false, error: "Failed to send email" },
            { status: 500 }
        );
    }
}