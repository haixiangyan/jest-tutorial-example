import sleep from "utils/sleep";

describe('sleep', () => {
  it('可以在 1s 后再执行',  async () => {
    jest.useFakeTimers();

    const act = async (callback: () => void) => {
      await sleep(1000)
      callback();
    }

    const mockCallback = jest.fn();

    const promise = act(mockCallback);

    // mockCallback 还未调用
    expect(mockCallback).not.toBeCalled();

    // 执行 setTimeout 里的 resolve
    jest.runAllTimers();

    // 执行 callback 内容
    await promise;

    // mockCallback 已调用
    expect(mockCallback).toBeCalled();
    expect(mockCallback).toHaveBeenCalledTimes(1);
  })
});
