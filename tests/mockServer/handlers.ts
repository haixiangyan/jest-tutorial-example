import { rest } from "msw";

const handlers = [
  rest.get("https://mysite.com/api/role", async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userType: "user",
      })
    );
  }),
  rest.get("https://mysite.com/api/users", async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: "1",
        name: "Jack",
        age: 19,
      })
    );
  }),
];

export default handlers;
