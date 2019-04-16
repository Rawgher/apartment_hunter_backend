import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./router";

mongoose.connect("mongodb://localhost/apartments");

// Initialize http server
const app = express();

// Logger that outputs all requests into the console
app.use(morgan("combined"));
// Use v1 as prefix for all API endpoints
app.use("/v1", router);

// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
