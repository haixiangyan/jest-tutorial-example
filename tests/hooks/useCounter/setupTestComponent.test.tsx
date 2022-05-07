import useCounter from "hooks/useCounter";
import { act, render } from "@testing-library/react";
import React from "react";

const setup = (initialNumber: number) => {
  const returnVal = {};

  const TestComponent = () => {
    const [counter, utils] = useCounter(initialNumber);

    Object.assign(returnVal, {
      counter,
      utils,
    });

    return null;
  };

  render(<TestComponent />);

  return returnVal;
};

describe("useCounter", () => {
  it("可以做加法", async () => {
    const useCounterData: any = setup(0);

    act(() => {
      useCounterData.utils.inc(1);
    });

    expect(useCounterData.counter).toEqual(1);
  });

  it("可以做减法", async () => {
    const useCounterData: any = setup(0);

    act(() => {
      useCounterData.utils.dec(1);
    });

    expect(useCounterData.counter).toEqual(-1);
  });

  it("可以设置值", async () => {
    const useCounterData: any = setup(0);

    act(() => {
      useCounterData.utils.set(10);
    });

    expect(useCounterData.counter).toEqual(10);
  });

  it("可以重置值", async () => {
    const useCounterData: any = setup(0);

    act(() => {
      useCounterData.utils.inc(1);
      useCounterData.utils.reset();
    });

    expect(useCounterData.counter).toEqual(0);
  });
});
