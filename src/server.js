import express from "express";

import routes from "./routes";
const app = express();

app.use(routes);

async function run() {
  app.listen(3333);
}
run().catch({ Error: console.error });
