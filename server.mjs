// import dependencies
import express from "express";
import dotenv from "dotenv";
dotenv.config();

// run function to connect to MONGODB
import connectToMongo from "./database/connectToMongo.mjs";
connectToMongo();

//import model
import FavSong from "./models/favSong.mjs";

const PORT = process.env.PORT || 4000;

const app = express();

// to parse body json / understand what the client wants/sending
app.use(express.json());

//get all favsongs posted by client
//read
app.get("/", async (req, res) => {
  try {
    const allFavSongs = await FavSong.find({});
    res.status(200).json(allFavSongs);
  } catch (error) {
    console.log("cannot get fav songs", error);
  }
});

//create
//POST - post your fav song
app.post("/", async (req, res) => {
  const { artist, songTitle } = req.body;
  try {
    const newFavSong = await FavSong.create({
      // artist: artist,
      // songTitle: songTitle
      artist,
      songTitle,
    });
    res.status(200).json(newFavSong);
  } catch (error) {
    console.log("bruh you did someting wrong", error);
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// want to create a api for music
// own api of favorite songs
// no audio
// mangement / keeping track of fav songs

// store in MONGODB
