/*
 * @Date: 2024-01-12 23:15:30
 * @Description: 邮件服务工具模块
 */
import { Global, Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { createTransport } from 'nodemailer';
import { ConfigService } from '@nestjs/config';
@Global()
@Module({
  controllers: [EmailController],
  providers: [
    EmailService,
    {
      provide: 'EMAIL_SERVICE',
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        const transporter = createTransport({
          host: configService.get('nodemailer_host'),
          port: configService.get('nodemailer_port'),
          auth: {
            user: configService.get('nodemailer_auth_user'),
            pass: configService.get('nodemailer_auth_pass'),
          },
        });
        return transporter;
      },
    },
  ],
  exports: [EmailService],
})
export class EmailModule {}
