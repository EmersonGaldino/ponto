import express from "express";
import message from "./config/message";
const routes = express.Router();

routes.get("/users", async (req, res) => {
  const users = ["Galdino", "Emerson", "Geisa"];
  return res.json({
    Success: true,
    object: users,
    auth: message.USER_ATUTHENTICATE
  });
});

routes.get("/", async (req, res) => {
  return res.json({
    Success: false,
    auth: message.USER_NOT_ATUTHENTICATION
  });
});

export default routes;
