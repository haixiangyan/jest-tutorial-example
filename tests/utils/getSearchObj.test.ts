import getSearchObj from "utils/getSearchObj";

describe("getSearchObj", () => {
  it("可以获取当前网址的查询参数对象", () => {
    window.location.assign("https://www.baidu.com?a=1&b=2");

    expect(window.location.search).toEqual("?a=1&b=2");
    expect(getSearchObj()).toEqual({
      a: "1",
      b: "2",
    });
  });

  it("空参数返回空", () => {
    window.location.assign("https://www.baidu.com");

    expect(window.location.search).toEqual("");
    expect(getSearchObj()).toEqual({});
  });
});
