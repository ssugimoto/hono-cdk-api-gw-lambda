import { Hono } from "hono";

// TODO のREST API
const todos = new Hono();
// 現在のUTC時刻を取得する関数
const getCurrentTimestamp = () => new Date().toISOString();

// Create: 新しいTodoを作成
todos.post("/", async (c) => {
  const now = getCurrentTimestamp();
  const params = {
    Item: {
      id: "dummyId" + now,
      createdAt: now,
      updatedAt: now,
    },
  };
  console.log("todo post.");
  return c.json(params);
});

// Read: 特定のユーザーの全てのTodoを取得
todos.get("/user/:userId", async (c) => {
  const userId = c.req.param("userId");
  const params = {
    ":userId": userId
  }
  console.log("get /user/ request")
  return c.json(params);
});

// Read: 特定のTodoを取得
todos.get("/:id", async (c) => {
  const id = c.req.param("id");
  const params = {
    Key: { id }
  };
  console.log("get /:id/ request")
  return c.json(params);
});

// Update: Todoを更新
todos.put("/:id", async (c) => {
  const id = c.req.param("id");
  const params = {
    Key: { id }
  };
  return c.json({ "method": "put", params });
});

// Delete: Todoを削除
todos.delete("/:id", async (c) => {
  const id = c.req.param("id");
  const params = {
    Key: { id }
  };
  return c.json({ "method": "delete", params });
});

export { todos };