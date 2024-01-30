import express from "express";

const app = express();
const PORT =  process.env.PORT || 4000;

app.get("/", (req,res)=>{
    res.send("hewo this is the backend")
});

app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))