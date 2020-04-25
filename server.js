const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const authenticate = require("./api/middleware/authenticate");
const path = require('path');
mongoose.connect(
  "mongodb+srv://arun1234:arun1234@hubx-1ftsz.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },()=>{
      console.log("mongodb running");
  }
);
const adminRoutes = require("./api/routes/admins");
const categoryRoutes = require("./api/routes/categories");
const userRoutes = require("./api/routes/users");
const productRoutes = require("./api/routes/products");
const cartItemRoutes = require("./api/routes/cartItems");
const orderRoutes = require("./api/routes/orders");

app.use(cors());
app.use(express.json());

app.use("/admin", adminRoutes);
app.use("/category", categoryRoutes);
app.use("/user", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", authenticate, cartItemRoutes);
app.use("/order", authenticate, orderRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: "Not Found",
  });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const port = process.env.PORT || 5000;
app.listen(port,()=>{
  console.log('server is running');
});