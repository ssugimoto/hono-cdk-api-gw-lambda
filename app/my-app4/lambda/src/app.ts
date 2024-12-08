import { Hono } from "hono";
import { logger } from "hono/logger";
import { basicAuth } from "hono/basic-auth";
import { todos } from "./api/todos";

// 純粋なHTTPサーバ、bun runで起動する
const app = new Hono();

// ログの設定
app.use("*", logger());
//Basic認証の設定
app.use(
  "*",
  basicAuth({
    username: process.env.BASIC_USERNAME ? process.env.BASIC_USERNAME : "",
    password: process.env.BASIC_PASSWORD ? process.env.BASIC_PASSWORD : "",
  })
);

app.route("/api/todos", todos);

export default app;