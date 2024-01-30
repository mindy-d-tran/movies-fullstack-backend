import { Router } from "express";
import db from "../db/conn.js";

const router = new Router();

router.get("/", async (req, res) => {
  const collection = await db.collection("movies");

  const movies = await collection.find().toArray();
  const topTen = movies.slice(0,10);

  res.send(topTen);
});

export default router;
