import { Inject, Injectable } from '@nestjs/common';
import { Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  @Inject('EMAIL_SERVICE')
  private transporter: Transporter;

  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: '会议室预定系统',
        address: '2389504513@qq.com',
      },
      to,
      subject,
      html,
    });
  }
}
