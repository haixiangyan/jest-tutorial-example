import React, { FC } from "react";
import AuthButton from "components/AuthButton";
import Header from "components/Header";
import { Button } from "antd";
import useCounter from "hooks/useCounter";
import Title from "components/Title";
import User from "components/User";

const App: FC = () => {
  const [counter, { inc, set, dec, reset }] = useCounter(0);

  return (
    <div>
      <h1>App</h1>

      <section>
        <Header />
      </section>

      <section>
        <AuthButton>登录</AuthButton>
      </section>

      <section>
        <div>Counter: {counter}</div>
        <Button onClick={() => inc(1)}>inc(1)</Button>
        <Button onClick={() => dec(1)}>dec(1)</Button>
        <Button onClick={() => set(10)}>set(10)</Button>
        <Button onClick={reset}>reset()</Button>
      </section>

      <section>
        <Title type="small" title="小字" />
        <Title type="large" title="大字" />
      </section>

      <section>
        <User />
      </section>
    </div>
  );
};

export default App;
