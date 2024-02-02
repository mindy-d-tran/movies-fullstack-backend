import "./loadEnv.js"
import express from "express";
import cors from "cors";
import morgan from "morgan";

import moviesRouter from "./routes/movies.js";
import userRouter from './routes/user.js';

const app = express();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(cors()); //allows fromedn to connect to backend
app.use(morgan("dev")); //logger
app.use(express.json()); // for data in req.body
app.use(express.urlencoded({ extended: true })); //allow data in url string

// routes
app.use('/api/movies', moviesRouter);
app.use('/api/users', userRouter);

app.get("/", (req, res) => {
  res.send("hewo this is the backend");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
