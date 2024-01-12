/*
 * @Date: 2024-01-12 23:15:30
 * @Description: 邮件服务工具模块
 */
import { Global, Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { createTransport } from 'nodemailer';
@Global()
@Module({
  controllers: [EmailController],
  providers: [
    EmailService,
    {
      provide: 'EMAIL_SERVICE',
      useFactory() {
        const transporter = createTransport({
          host: 'smtp.qq.com',
          port: 587,
          auth: {
            user: '2389504513@qq.com',
            pass: 'euvssomcevirdjgb',
          },
        });
        return transporter;
      },
    },
  ],
  exports: [EmailService],
})
export class EmailModule {}
