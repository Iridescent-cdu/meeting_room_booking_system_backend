interface UserInfo {
  id: number;

  username: string;

  nickName: string;

  email: string;

  headPic: string;

  phoneNumber: string;

  isFrozen: boolean;

  isAdmin: boolean;

  createTime: number;

  roles: string[];

  permissions: string[];
}

export class LoginUserVo {
  public userInfo: UserInfo;

  public accessToken: string;

  public refreshToken: string;

  constructor(
    userInfo?: UserInfo,
    accessToken?: string,
    refreshToken?: string,
  ) {
    this.userInfo = userInfo;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  public set setUserInfo(userInfo: UserInfo) {
    this.userInfo = userInfo;
  }

  public set setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  public set setRefreshToken(refreshToken) {
    this.refreshToken = refreshToken;
  }
}
