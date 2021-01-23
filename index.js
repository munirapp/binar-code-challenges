const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const routes = require("./routes");

app.use(bodyParser.json());

app.use("/", routes);

app.get("/api/users", async (req, res) => {
  const fullName = req.body["full_name"];
  await db.users.create({
    full_name: fullName,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.send("sucess insert data " + fullName);
});

app.listen(5000, () => console.log("this app running on port 5000"));
