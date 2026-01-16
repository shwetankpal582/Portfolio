import { Resend } from 'resend';
import { Request, Response } from 'express';
import dbConnect from "../lib/dbConnect.js";
import Message from "../lib/Message.js";

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleContact(req: Request, res: Response) {
  try {
    const { name, email, subject, message } = req.body as ContactRequestBody;

    await dbConnect();

    // Save to database
    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });
    await newMessage.save();

    console.log("Message saved to DB:", newMessage);

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is missing. Email will not be sent.");
        return res.status(200).json({ success: true, warning: "Email not sent (missing key)" });
    }
    
    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update this to your verified domain later
      to: process.env.EMAIL_USER || 'delivered@resend.dev', // Fallback for testing
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Resend API response:", data);

    if (data.error) {
        throw new Error(data.error.message);
    }

    res.status(200).json({ success: true, data });
  } catch (error: unknown) {
    const errorObj = error instanceof Error ? error : new Error("Unknown error");
    console.error("Email error:", errorObj);
    res.status(500).json({ success: false, error: errorObj.message });
  }
}
