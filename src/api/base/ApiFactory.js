import { IdentityRoleEnum } from "../../consts/base-enum";
import userApi from "../UserApi";
import sysUserApi from "../sys/SysUserApi";

export function baseIdentityApi(identityRoleEnum) {
  if (IdentityRoleEnum.USER.equals(identityRoleEnum)) {
    return userApi;
  } else if (IdentityRoleEnum.SYS_USER.equals(identityRoleEnum)) {
    return sysUserApi;
  }
  return userApi;
}
