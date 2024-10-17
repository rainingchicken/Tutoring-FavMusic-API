import mongoose from "mongoose";

const connectToMongo = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.once("open", () =>
      console.log(`Connect to MongoDB successfully!!`)
    );
  } catch (error) {
    console.log(`Cannot connect to databse`, error);
  }
};

export default connectToMongo;
