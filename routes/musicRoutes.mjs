import express from "express";
const router = express.Router();

//import our model
import FavSong from "../models/FavSong.mjs";

//GET
// get all music inputed by users
router.get("/", async (req, res) => {
  try {
    // declaration varaibleName = await Collection.method({queries})
    const allMusic = await FavSong.find({}).sort({ artist: -1 }); //leaving bracket empty means find all
    res.status(200).json(allMusic);
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
router.patch("/:songID", async (req, res) => {
  //   const { artist, songTitle } = req.body;
  const { artist } = req.body; //brackets are for destructuring the req.body
  const { songTitle } = req.body;
  const id = req.params.songID;
  try {
    //-- METHOD 1 findByIdAndUpdate --//
    //find and update the data
    await FavSong.findByIdAndUpdate(
      { _id: id },
      {
        artist,
        songTitle,
      }
    );

    //-- METHOD 2 findOneAndUpdate --//
    // const updatedSong = await FavSong.findOneAndUpdate(
    //   { _id: id },
    //   { artist, songTitle }
    // );

    //find the updatedData and send back json object
    const updatedSong = await FavSong.findById({ _id: id });
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
    // const deletedSong = await FavSong.findByIdAndDelete(_id); //NO curly bracket
    const deletedSong = await FavSong.findOneAndDelete({ _id }); // shorthand for _id:_id (if and only if key and value is the same)
    res.status(200).json(deletedSong);
  } catch (error) {
    console.log("Something went wrong in POST route" + error);
    res.status(404).json({ error });
  }
});

export default router;
