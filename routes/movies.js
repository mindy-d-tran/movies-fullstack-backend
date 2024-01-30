import { Router } from "express";
import db from "../db/conn.js";

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const collection = await db.collection("movies");

    const movies = await collection.find().toArray();
    const topTen = movies.slice(0, 10);

    res.status(200).send(topTen);
  } catch (error) {
    console.log(error);
  }
});

export default router;
