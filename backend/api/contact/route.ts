import nodemailer from "nodemailer";
import dbConnect from "../lib/dbConnect.js";
import Message from "../lib/Message.js";

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = (await req.json()) as ContactRequestBody;

    await dbConnect();

    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });

    console.log("res",req);
    console.log("newMessage",newMessage)

    await newMessage.save();

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Please define the EMAIL_USER and EMAIL_PASS environment variables.");
    }

    console.log("EMAIL_USER is defined:", !!process.env.EMAIL_USER);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error: any) {
    console.error("Email error:", error, error.stack);
    const errorMessage = error instanceof Error ? error.message : 'An unknown server error occurred.';
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
    });
  }
}
// Updated and fixed the contact form email sending issue.