import { Request, Response } from "express";
const express = require('express');
const port = 3000;

const app = express();
app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
