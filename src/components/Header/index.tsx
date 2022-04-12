import React, {FC, HTMLAttributes} from "react";
import classNames from "classnames";
import {isDev} from "../../config";

type Props = HTMLAttributes<HTMLHeadElement>

const Header: FC<Props> = (props) => {
  const { className, ...restProps } = props;

  return (
    <header {...restProps} className={classNames(className)}>
      当前环境: {isDev ? '开发环境' : '生产环境'}
    </header>
  )
}

export default Header;
