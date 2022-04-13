# jest-starter

[![Coverage Status](https://coveralls.io/repos/github/haixiangyan/jest-starter/badge.svg?branch=main)](https://coveralls.io/github/haixiangyan/jest-starter?branch=main)

## 主要内容

* 开始上手
  * Jest 配置初始化
  * `expect(sum(1, 1).toEqual(2)`
  * 查看测试覆盖率

* Jest x TypeScript
  * 使用 `ts-jest` 进行转译
  * 使用 `paths` 在 `tsconfig.json` 配置缩写，可以业务代码中缩写
  * 使用 `moduleDirectories` 在测试代码中缩写
 
* 测试 `storage`
  * 使用 `jest-environment-jsdom` 来 Mock 环境
  * 测试 `localStorage` 的使用
 
* 测试 `getSearchObj`
  * 使用 `window.location`
  * 使用 `jest-environment-jsdom-global` 来 `assign` 改变 location
  * 可以尝试使用 `jest-location-mock` 来实现 Mock
 
* 引入 React
  * 安装 React，配置 `tsx`
  * 配置 Webpack，写对应的 `webpack.config.js` 配置文件
  * `alias` 要对应 `tsconfig.json` 里的 `paths`
 
* 测试 `AuthButton` 组件
  * 通过 Mock `axios` 来测试
  * 通过 Mock 接口函数来测试
  * 通过 `msw` Mock HTTP 请求来测试（更优）
  * 使用 `setup` 函数进行代码抽象
 
* 测试 `Header` 组件
  * 通过 `Object.defineProperty` 来 Mock 不同变量

* 使用 TDD 编写 `objToSearchStr`
  * TDD

* Jest 性能优化
  * `runInBand` 以及 `maxWorkers: 1`
  * 使用 `swc/jest` 替代 `ts-jest`

* 测试 `sleep` 函数
  * 使用 `act` 来编写用例
  * 发现无法输出正确结果
  * 解析 EventLoop
  * 添加一行 `await promise` 来解决

* 测试 `useCounter`
  * 使用真实的 `TestComponent` 来测试
  * 使用虚拟的 `component`，放在 `setup` 函数中测试
  * 使用 `@testing-library/react-hooks` 来测试
  * 解释版本问题

* ESLint
  * `plugin:@typescript-eslint/recommended`
  * `plugin:jest/recommended`
  * `plugin:testing-library/react`
  * 解释 `plugins` 和 `extends` 的区别
