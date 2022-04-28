type AnyFunction = (...args: any[]) => any;

const after1000ms = (callback: AnyFunction) => {
  console.log("准备计时");
  setTimeout(() => {
    console.log("午时已到");
    callback && callback();
  }, 1000);
};

export default after1000ms;
