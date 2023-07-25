import express, { Request, Response } from "express";
import todoRouter from "./routers/todo";

const app = express();

// Parse incomming JSON
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Rest API uing node",
  });
});

app.use(todoRouter);

export default app;
