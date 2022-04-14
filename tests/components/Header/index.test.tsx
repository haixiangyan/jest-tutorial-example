import React from "react";
import Header from "components/Header";
import { render, screen } from "@testing-library/react";
import * as configUtils from "../../../src/config";

describe("Header", () => {
  it("isDev 为 true，显示开发环境", async () => {
    Object.defineProperty(configUtils, "isDev", {
      value: true,
    });
    render(<Header />);
    expect(await screen.findByText("当前环境: 开发环境")).toBeInTheDocument();
  });

  it("isDev 为 false，显示生产环境", async () => {
    Object.defineProperty(configUtils, "isDev", {
      value: false,
    });
    render(<Header />);
    expect(await screen.findByText("当前环境: 生产环境")).toBeInTheDocument();
  });
});
