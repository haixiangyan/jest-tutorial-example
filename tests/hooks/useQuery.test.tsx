import React from "react";
import useQuery from "hooks/useQuery";
import { createMemoryHistory, InitialEntry } from "history";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";

const setup = (initialEntries: InitialEntry[]) => {
  const history = createMemoryHistory({
    initialEntries,
  });

  const returnVal = {
    query: new URLSearchParams(),
  };

  const TestComponent = () => {
    const query = useQuery();

    Object.assign(returnVal, { query });

    return null;
  };

  render(
    <Router location={history.location} navigator={history}>
      <TestComponent />
    </Router>
  );

  return returnVal;
};

describe("userQuery", () => {
  it("可以获取参数", () => {
    const result = setup([
      {
        pathname: "/home",
        search: "?id=123",
      },
    ]);

    expect(result.query.get("id")).toEqual("123");
  });

  it("查询参数为空时返回 Null", () => {
    const result = setup([
      {
        pathname: "/home",
      },
    ]);

    expect(result.query.get("id")).toBeNull();
  });
});
