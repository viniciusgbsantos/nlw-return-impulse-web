import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6320fb5bd4bc04",
      pass: "067a3ad02c6cdf"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData)  {
        await transport.sendMail({
        from: 'Equipe feedget <oi@feedget.com',
        to: 'Vinicius <vinicius.gabriel001@outlook.com',
        subject,
        html: body
    })

    };
}