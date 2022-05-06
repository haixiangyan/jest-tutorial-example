import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchUserThunk } from "store/user/thunks";
import { selectUser, selectUserFetchStatus } from "store/user/selectors";
import { Button } from "antd";

const User: FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const status = useAppSelector(selectUserFetchStatus);

  const onClick = async () => {
    const res = await dispatch(fetchUserThunk());
    console.log("fetchUserThunk", res);
  };

  return (
    <div>
      <h2>用户信息</h2>

      {status === "loading" && <p>加载中...</p>}

      {user.id ? (
        <div>
          <p>ID：{user.id}</p>
          <p>姓名：{user.name}</p>
          <p>年龄：{user.age}</p>
        </div>
      ) : (
        <p>无用户信息</p>
      )}

      <Button onClick={onClick} type="primary">
        加载用户
      </Button>
    </div>
  );
};

export default User;
