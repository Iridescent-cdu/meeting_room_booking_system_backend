import { ApiProperty } from '@nestjs/swagger';

class UserInfo {
  @ApiProperty()
  id: number;

  @ApiProperty({ example: 'zhangsan' })
  username: string;

  @ApiProperty({ example: '张三' })
  nickName: string;

  @ApiProperty({ example: 'xx@xx.com' })
  email: string;

  @ApiProperty({ example: 'xxx.png' })
  headPic: string;

  @ApiProperty({ example: '13233333333' })
  phoneNumber: string;

  @ApiProperty()
  isFrozen: boolean;

  @ApiProperty()
  isAdmin: boolean;

  @ApiProperty()
  createTime: number;

  @ApiProperty({ example: ['管理员'] })
  roles: string[];

  @ApiProperty({ example: 'query_aaa' })
  permissions: string[];
}

export class LoginUserVo {
  @ApiProperty()
  private userInfo: UserInfo;

  @ApiProperty()
  private accessToken: string;

  @ApiProperty()
  private refreshToken: string;

  constructor(
    userInfo?: UserInfo,
    accessToken?: string,
    refreshToken?: string,
  ) {
    this.userInfo = userInfo;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  public get getUserInfo() {
    return this.userInfo;
  }

  public set setUserInfo(userInfo: UserInfo) {
    this.userInfo = userInfo;
  }

  public get getAccessToken() {
    return this.accessToken;
  }

  public set setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  public get getRefreshToken() {
    return this.refreshToken;
  }

  public set setRefreshToken(refreshToken: string) {
    this.refreshToken = refreshToken;
  }
}
