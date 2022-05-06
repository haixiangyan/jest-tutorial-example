describe("doMock config", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("开发环境", () => {
    jest.doMock("utils/env", () => ({
      __esModule: true,
      config: {
        getEnv: () => "dev",
      },
    }));

    const { config } = require("utils/env");

    expect(config.getEnv()).toEqual("dev");
  });

  it("正式环境", () => {
    jest.doMock("utils/env", () => ({
      __esModule: true,
      config: {
        getEnv: () => "prod",
      },
    }));

    const { config } = require("utils/env");

    expect(config.getEnv()).toEqual("prod");
  });
});
