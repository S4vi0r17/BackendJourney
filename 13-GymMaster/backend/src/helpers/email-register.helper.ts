import nodemailer, { TransportOptions } from 'nodemailer';

interface EmailConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  fromEmail: string;
  frontendUrl: string;
}

const getEmailConfig = (): EmailConfig => ({
  host: process.env.MAIL_HOST || '',
  port: parseInt(process.env.MAIL_PORT || '0', 10),
  user: process.env.MAIL_USER || '',
  pass: process.env.MAIL_PASS || '',
  fromEmail: process.env.FROM_EMAIL || 'noreply@gymmaster.com',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
});

const createTransporter = (config: EmailConfig) => 
  nodemailer.createTransport({
    host: config.host,
    port: config.port,
    auth: {
      user: config.user,
      pass: config.pass
    }
  } as TransportOptions);

const emailRegister = async (name: string, email: string, token: string): Promise<void> => {
  const config = getEmailConfig();
  
  try {
    const transporter = createTransporter(config);

    const info = await transporter.sendMail({
      from: `"GymMaster" <${config.fromEmail}>`,
      to: email,
      subject: "Welcome to GymMaster - Confirm Your Account",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to GymMaster</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4CAF50; color: white; text-align: center; padding: 10px; }
            .content { background-color: #f4f4f4; padding: 20px; border-radius: 5px; }
            .button { display: inline-block; background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to GymMaster</h1>
            </div>
            <div class="content">
              <h2>Hello ${name},</h2>
              <p>Thank you for registering with GymMaster. We're excited to have you on board!</p>
              <p>To complete your registration and activate your account, please click the button below:</p>
              <p style="text-align: center;">
                <a href="${config.frontendUrl}/account-verification/${token}" class="button">Confirm Your Account</a>
              </p>
              <p>If the button doesn't work, you can also copy and paste the following link into your browser:</p>
              <p>${config.frontendUrl}/account-verification/${token}</p>
              <p>If you didn't create an account with GymMaster, please ignore this email.</p>
              <p>Best regards,<br>The GymMaster Team</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}

export default emailRegister;