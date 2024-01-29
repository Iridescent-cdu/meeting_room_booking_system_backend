import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenVo {
  constructor(access_token: string, refresh_token: string) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
  }

  @ApiProperty()
  access_token: string;

  @ApiProperty()
  refresh_token: string;
}
