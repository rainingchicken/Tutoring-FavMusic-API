import express from "express";
import dotenv from "dotenv";
dotenv.config();

// run function to connect to MONGODB
import connectToMongo from "./database/connectToMongo.mjs";
connectToMongo();

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// want to create a api for music
// own api of favorite songs
// no audio
// mangement / keeping track of fav songs

// store in MONGODB
