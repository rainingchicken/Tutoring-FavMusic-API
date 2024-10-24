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
favSongSchema.pre("find", function () {
  this._startTime = Date.now();
});

favSongSchema.post("find", function () {
  if (this._startTime != null) {
    console.log("Runtime in MS: ", Date.now() - this._startTime);
  }
});
const FavSong = mongoose.model("FavSong", favSongSchema);
export default FavSong;
