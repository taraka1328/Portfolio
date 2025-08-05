# Contact Form Setup Instructions

## Quick Start (Development Mode)

To test the contact form immediately without email setup:

1. **Rename the development file:**
   ```bash
   # Backup current route
   mv src/app/api/contact/route.ts src/app/api/contact/route.prod.ts
   
   # Use development version
   mv src/app/api/contact/route.dev.ts src/app/api/contact/route.ts
   ```

2. **Start your development server:**
   ```bash
   npm run dev
   ```

3. **Test the form** - submissions will be logged to the console instead of sent via email.

## Production Setup (SendGrid)

### Step 1: Get SendGrid API Key

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Go to Settings → API Keys
3. Create a new API key with "Mail Send" permissions
4. Copy the API key

### Step 2: Configure Environment Variables

Edit `.env.local` and replace the placeholder values:

```env
# Your receiving email
CONTACT_RECEIVER_EMAIL=tarakalakshmiprasanna286@gmail.com

# SendGrid SMTP configuration
EMAIL_SMTP_HOST=smtp.sendgrid.net
EMAIL_SMTP_PORT=587
EMAIL_SMTP_SECURE=false
EMAIL_SMTP_USER=apikey
EMAIL_SMTP_PASS=YOUR_ACTUAL_SENDGRID_API_KEY_HERE

# Verified sender email (must be verified in SendGrid)
EMAIL_FROM=noreply@yourdomain.com
```

### Step 3: Verify Sender Email

1. In SendGrid dashboard, go to Settings → Sender Authentication
2. Verify your sender email address
3. Update `EMAIL_FROM` in `.env.local` with the verified email

### Step 4: Switch to Production Route

```bash
# Restore production version
mv src/app/api/contact/route.ts src/app/api/contact/route.dev.ts
mv src/app/api/contact/route.prod.ts src/app/api/contact/route.ts
```

### Step 5: Test

1. Restart your development server
2. Submit a test message through the contact form
3. Check your email for the message

## Alternative Email Providers

### Gmail SMTP

```env
EMAIL_SMTP_HOST=smtp.gmail.com
EMAIL_SMTP_PORT=587
EMAIL_SMTP_SECURE=false
EMAIL_SMTP_USER=your-gmail@gmail.com
EMAIL_SMTP_PASS=your-app-password
EMAIL_FROM=your-gmail@gmail.com
```

**Note:** You need to enable 2FA and create an App Password in Gmail settings.

### Other SMTP Providers

- **Mailgun:** smtp.mailgun.org
- **Amazon SES:** email-smtp.region.amazonaws.com
- **Outlook:** smtp-mail.outlook.com

## Troubleshooting

### Common Issues

1. **"Server configuration error"**
   - Check that all environment variables are set in `.env.local`
   - Restart your development server after changing env vars

2. **"Email authentication failed"**
   - Verify your API key/password is correct
   - Check that your sender email is verified with the provider

3. **"Unable to connect to email service"**
   - Check your internet connection
   - Verify SMTP host and port settings
   - Some networks block SMTP ports

### Debug Mode

Check the server console for detailed error messages. The API logs all steps of the email sending process.

### Testing Without Email

Use the development version (`route.dev.ts`) to test form validation and submission without actually sending emails.

## Security Features

- **Honeypot protection** - Hidden field to catch spam bots
- **Input sanitization** - Removes potentially harmful characters
- **Rate limiting** - Built-in connection timeouts
- **Validation** - Server-side validation of all fields
- **Error handling** - Graceful error handling with user-friendly messages

## Form Features

- **Client-side validation** - Immediate feedback for users
- **Loading states** - Visual feedback during submission
- **Toast notifications** - Success/error messages
- **Responsive design** - Works on all devices
- **Accessibility** - Proper labels and ARIA attributes