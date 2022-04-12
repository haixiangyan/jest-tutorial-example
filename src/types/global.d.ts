declare namespace globalThis {
  var jsdom: any;
}

declare module "*.less" {
  const content: any;
  export default content;
}
