import * as envUtils from "utils/env";

const originEnv = envUtils.env;

describe("env", () => {
  afterEach(() => {
    Object.defineProperty(envUtils, "env", {
      value: originEnv,
      writable: true,
    });
  });

  it("开发环境", () => {
    Object.defineProperty(envUtils, "env", {
      value: "dev",
      writable: true,
    });

    expect(envUtils.env).toEqual("dev");
  });

  it("正式环境", () => {
    Object.defineProperty(envUtils, "env", {
      value: "prod",
      writable: true,
    });

    expect(envUtils.env).toEqual("prod");
  });
});
