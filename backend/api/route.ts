import nodemailer from "nodemailer";
import { Request, Response } from 'express';
import dbConnect from "../lib/dbConnect.js";
import Message from "../lib/Message.js";

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function handleContact(req: Request, res: Response) {
  try {
    const { name, email, subject, message } = req.body as ContactRequestBody;

    await dbConnect();

    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });

    console.log("req", req);
    console.log("newMessage", newMessage);

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

    res.status(200).json({ success: true });
  } catch (error: unknown) {
    const errorObj = error instanceof Error ? error : new Error("Unknown error");
    console.error("Email error:", errorObj, errorObj.stack);
    const errorMessage = errorObj.message;
    res.status(500).json({ success: false, error: errorMessage });
  }
}
// Updated and fixed the contact form email sending issue.