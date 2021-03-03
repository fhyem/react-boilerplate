const express = require("express");
const app = express();
app.use(express.static("dist"));

app.all("/", function (req, res) {
  res.sendFile("index.html", { root: "./dist/" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
