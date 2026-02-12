# Email Setup Guide (Resend)

To receive emails from your portfolio's contact form, follow these steps:

## 1. Get your Resend API Key
1. Go to [Resend.com](https://resend.com) and create an account.
2. Go to the **API Keys** section and create a new key.
3. Copy the key and add it to your `.env` file (and Vercel environment variables):
   ```env
   RESEND_API_KEY=re_your_key_here
   ```

## 2. Configure Recipient Email
In your `.env` (and Vercel), set the email address where you want to receive messages:
```env
EMAIL_USER=your-email@example.com
```

## 3. Verify Your Domain (Optional but Recommended)
By default, the form uses `onboarding@resend.dev` as the sender. This works for testing but will only send to the email you signed up with.
To send from your own domain or to any email:
1. Go to **Domains** in Resend.
2. Add your domain (e.g., `shwetank-pal.vercel.app` or a custom domain).
3. Update the `from` field in `api/contact.ts` to use your verified domain.

## 4. Database Setup
Ensure `MONGODB_URI` is set in your environment variables so the messages can be saved to your database as a backup.
