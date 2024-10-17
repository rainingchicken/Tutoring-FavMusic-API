import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
