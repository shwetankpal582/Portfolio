import { Resend } from 'resend';
import mongoose from 'mongoose';

// Inline simple DB connect and Model to avoid path issues on Vercel
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI!).then((mongoose) => mongoose);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

const MessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: true });

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { name, email, subject, message } = req.body;

        await dbConnect();

        // Save to database
        const newMessage = new Message({ name, email, subject, message });
        await newMessage.save();

        if (!process.env.RESEND_API_KEY) {
            return res.status(200).json({ success: true, warning: 'Email not sent (missing RESEND_API_KEY)' });
        }

        // Send email
        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: process.env.EMAIL_USER || 'shwetankpal1786@gmail.com',
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (data.error) {
            throw new Error(data.error.message);
        }

        return res.status(200).json({ success: true, data });
    } catch (error: any) {
        console.error('API Error:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}
