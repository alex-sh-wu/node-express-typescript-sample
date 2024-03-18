import express, { Request, Response } from "express";
import { userRouter } from "./routes";
const port = 3000;

const app = express();

app.use('/api/users', userRouter);

app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
