import { createTransport, getTestMessageUrl } from 'nodemailer';
import 'dotenv';

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function makeNiceEmail(text: string): string {
  return `
    <div styled="border: 1px solid black;
        padding:20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
    ">
    <h2>Hello There! How you doing?</h2>
    <p>${text}</p>
    <p>Powered by ROMs &hearts;</p>
    </div>
  `;
}

export interface MailResponse {
  accepted?: string[] | null;
  rejected?: null[] | null;
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}
export interface Envelope {
  from: string;
  to?: string[] | null;
}

export const sendPasswordResetEmail = async (
  resetToken: string,
  to: string
): Promise<void> => {
  const info = (await transport.sendMail({
    to,
    from: 'example@example.com',
    subject: 'Your password reset token',
    html: makeNiceEmail(`Your Password Reset Token is Here!
        <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}"> click here to reset</a>
    `),
  })) as MailResponse;
  if (process.env.MAIL_USER.includes('ethereal.email')) {
    console.log(`Message sent Preview it at ${getTestMessageUrl(info)}`);
  }
};
