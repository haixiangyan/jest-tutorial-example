import React, {FC} from "react";
import AuthButton from "./components/AuthButton";

const App: FC = () => {
  return (
    <div>
      <h1>App</h1>
      <AuthButton authType="user" />
    </div>
  )
}

export default App;
