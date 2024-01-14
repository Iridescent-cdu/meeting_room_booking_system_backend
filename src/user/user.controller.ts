import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  @Inject(JwtService)
  private jwtService: JwtService;

  @Inject(ConfigService)
  private configService: ConfigService;

  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() registerUser: RegisterUserDto) {
    return this.userService.register(registerUser);
  }

  @Get('init-data')
  async initData() {
    return await this.userService.initData();
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const vo = await this.userService.login(loginUserDto, false);
    vo.setAccessToken(
      this.jwtService.sign(
        {
          userId: vo.getUserInfo.id,
          username: vo.getUserInfo.username,
          roles: vo.getUserInfo.roles,
          permissions: vo.getUserInfo.permissions,
        },
        {
          expiresIn:
            this.configService.get('jwt_access_token_expires_time') || '30m',
        },
      ),
    );
    vo.setRefreshToken(
      this.jwtService.sign(
        {
          userId: vo.getUserInfo.id,
        },
        {
          expiresIn:
            this.configService.get('jwt_refresh_token_expres_time') || '7d',
        },
      ),
    );
    return vo;
  }

  @Post('admin/login')
  async adminLogin(@Body() loginUserDto: LoginUserDto) {
    const vo = await this.userService.login(loginUserDto, true);
    vo.setAccessToken(
      this.jwtService.sign(
        {
          userId: vo.getUserInfo.id,
          username: vo.getUserInfo.username,
          roles: vo.getUserInfo.roles,
          permissions: vo.getUserInfo.permissions,
        },
        {
          expiresIn:
            this.configService.get('jwt_access_token_expires_time') || '30m',
        },
      ),
    );
    vo.setRefreshToken(
      this.jwtService.sign(
        {
          userId: vo.getUserInfo.id,
        },
        {
          expiresIn:
            this.configService.get('jwt_refresh_token_expres_time') || '7d',
        },
      ),
    );
    return vo;
  }
}
