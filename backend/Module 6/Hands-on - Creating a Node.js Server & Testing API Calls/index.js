const express = require("express");
const userRoutes = require("./routes/apiRoutes");

const app = express();
app.use(express.json());
app.use("/api", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
