const express = require("express");
const bodyParser = require("body-parser");
const transferRoutes = require("./routes/transferRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware to parse JSON request bodies
app.use(bodyParser.json());

//Routing all API requests to the transfer routes
app.use("/api", transferRoutes);

//Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
