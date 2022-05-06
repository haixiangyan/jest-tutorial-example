import { configObj } from "utils/env";

describe("configObj env getter", () => {
  it("开发环境", () => {
    jest.spyOn(configObj, "env", "get").mockReturnValue("dev");

    expect(configObj.env).toEqual("dev");
  });

  it("正式环境", () => {
    jest.spyOn(configObj, "env", "get").mockReturnValue("prod");

    expect(configObj.env).toEqual("prod");
  });
});
