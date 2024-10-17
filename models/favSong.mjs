import mongoose from "mongoose";

const favSongSchema = new mongoose.Schema(
  {
    artist: String, //case sensitive
    songTitle: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const FavSong = mongoose.model("FavSong", favSongSchema);
export default FavSong;
