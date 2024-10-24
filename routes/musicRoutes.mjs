import express from "express";
const router = express.Router();

//import our model
import FavSong from "../models/FavSong.mjs";

//GET
// get all music inputed by users
router.get("/", async (req, res) => {
  try {
    // declaration varaibleName = await Collection.method({queries})s
    const theweekndMusic = await FavSong.find({}).sort({ artist: -1 });
    res.status(200).json(theweekndMusic);
  } catch (error) {
    console.log("Something went wrong in GET route" + error);
    res.status(404).json({ error });
  }
});

//POST
router.post("/", async (req, res) => {
  const { artist, songTitle } = req.body;
  try {
    const newSong = await FavSong.create({
      artist,
      songTitle,
    });

    res.status(200).json(newSong);
  } catch (error) {
    console.log("Something went wrong in POST route" + error);
    res.status(404).json({ error });
  }
});

//PATCH/PUT
router.patch("/:_id", async (req, res) => {
  //   const { artist, songTitle } = req.body;
  const { artist } = req.body;
  const { songTitle } = req.body;
  const _id = req.params._id;
  try {
    const updatedSong = await FavSong.findByIdAndUpdate(_id, {
      artist,
      songTitle,
    });
    // const updatedSong = await FavSong.findOneAndUpdate(
    //   { _id }, //find where _id: _id
    //   { artist, songTitle }
    // );
    res.status(200).json(updatedSong);
  } catch (error) {
    console.log("Something went wrong in POST route" + error);
    res.status(404).json({ error });
  }
});

//DELETE
router.delete("/:_id", async (req, res) => {
  const _id = req.params;
  try {
    // const deletedSong = await FavSong.findByIdAndDelete(_id);
    const deletedSong = await FavSong.findOneAndDelete({ _id: _id });
    res.status(200).json(deletedSong);
  } catch (error) {
    console.log("Something went wrong in POST route" + error);
    res.status(404).json({ error });
  }
});

export default router;
