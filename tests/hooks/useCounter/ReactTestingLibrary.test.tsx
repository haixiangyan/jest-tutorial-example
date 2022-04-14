import { renderHook } from "@testing-library/react-hooks";
import useCounter from "hooks/useCounter";
import { act } from "@testing-library/react";

describe("useCounter", () => {
  it("可以做加法", () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current[1].inc(1);
    });

    expect(result.current[0]).toEqual(1);
  });

  it("可以做减法", () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current[1].dec(1);
    });

    expect(result.current[0]).toEqual(-1);
  });

  it("可以设置值", () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current[1].inc(10);
    });

    expect(result.current[0]).toEqual(10);
  });

  it("可以重置值", () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current[1].inc(1);
      result.current[1].reset();
    });

    expect(result.current[0]).toEqual(0);
  });

  it("可以使用最大值", () => {
    const { result } = renderHook(() => useCounter(100, { max: 10 }));

    expect(result.current[0]).toEqual(10);
  });

  it("可以使用最小值", () => {
    const { result } = renderHook(() => useCounter(0, { min: 10 }));

    expect(result.current[0]).toEqual(10);
  });
});
