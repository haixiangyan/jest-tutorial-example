import React, {FC, useEffect, useState} from "react";
import {Button, ButtonProps, message} from "antd";
import classNames from "classnames";
import styles from './styles.module.less';
import {getUserRole, UserRoleType} from "apis/user";

interface Props extends ButtonProps {}

const mapper: Record<UserRoleType, string> = {
  user: '普通用户',
  admin: '管理员',
}

const AuthButton: FC<Props> = (props) => {
  const { children, className, ...restProps } = props;

  const [userType, setUserType] = useState<UserRoleType>();

  const getLoginState = async () => {
    const res = await getUserRole();
    setUserType(res.data.userType);
  }

  useEffect(() => {
    getLoginState().catch(e => message.error(e.message))
  }, []);

  return (
    <Button {...restProps} className={classNames(className, styles.authButton)}>
      {mapper[userType!] || ''}
      {children}
    </Button>
  )
}

export default AuthButton;
