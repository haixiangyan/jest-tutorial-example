import React, {FC} from "react";
import zhCN from 'antd/lib/locale/zh_CN';
import AuthButton from "components/AuthButton";
import Header from "components/Header";
import {ConfigProvider} from "antd";

const App: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div>
        <h1>App</h1>
        <Header />
        <AuthButton>登录</AuthButton>
      </div>
    </ConfigProvider>
  )
}

export default App;
