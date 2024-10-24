(req,res)=>{ const { artist, songTitle } = req.body;
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
}}