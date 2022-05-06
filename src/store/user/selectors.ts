import { RootState } from "../index";

export const selectUser = (state: RootState) => {
  const { id, age, name } = state.user;

  return {
    id,
    age,
    name,
  };
};

export const selectUserFetchStatus = (state: RootState) => state.user.status;
