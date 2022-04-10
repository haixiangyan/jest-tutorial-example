import React, {FC, HTMLAttributes} from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  authType: 'user' | 'admin'
}

const AuthButton: FC<Props> = (props) => {
  const { authType, children, ...restProps } = props;

  return (
    <button {...restProps}>
      {authType === 'user' ? '普通用户' : '管理员'}
      {children}
    </button>
  )
}

export default AuthButton;
