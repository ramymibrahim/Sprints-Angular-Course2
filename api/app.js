const express = require("express");
const app = express();
const mongoose = require("mongoose");
const categoryRouter = require("./routes/CategoryRoutes");
const productRouter = require("./routes/ProductRoutes");
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/multi-shop",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
//middleware
app.use(express.json());
app.use("/api/categories", categoryRouter);
app.use("/api/products", productRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;
