import express from "express";

const routes = express.Router();

routes.get("/users", async (req, res) => {
  const users = ["Galdino", "Emerson", "Geisa"];
  return res.json({ Success: true, object: users });
});

export default routes;
