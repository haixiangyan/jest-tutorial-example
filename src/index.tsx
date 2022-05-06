import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.querySelector("#root")
);
