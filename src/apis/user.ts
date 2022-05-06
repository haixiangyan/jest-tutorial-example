import axios from "axios";

// 获取用户角色身份
export type UserRoleType = "user" | "admin";

export interface GetUserRoleRes {
  userType: UserRoleType;
}

export const getUserRole = async () => {
  return axios.get<GetUserRoleRes>("https://mysite.com/api/role");
};

// 获取用户列表
export interface FetchUserRes {
  id: string;
  name: string;
}

export const fetchUser = async () => {
  return axios.get<FetchUserRes>("https://mysite.com/api/users");
};
