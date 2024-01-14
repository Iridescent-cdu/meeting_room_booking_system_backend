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
  private userInfo: UserInfo;

  private accessToken: string;

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

  public set setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  public get getRefreshToken() {
    return this.refreshToken;
  }

  public set setRefreshToken(refreshToken) {
    this.refreshToken = refreshToken;
  }
}
