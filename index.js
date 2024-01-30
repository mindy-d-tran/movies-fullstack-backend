import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(cors()); //allows fromedn to connect to backend
app.use(morgan("dev")); //logger
app.use(express.json()); // for data in req.body
app.use(express.urlencoded({ extended: true })); //allow data in url string

app.get("/", (req, res) => {
  res.send("hewo this is the backend");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
