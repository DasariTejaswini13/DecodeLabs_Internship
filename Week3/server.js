const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MYSQL CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tej13",
  database: "cruddb"
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("✅ DB connected");
  }
});

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is working");
});

// ADD USER
app.post("/add", (req, res) => {
  const { name, email } = req.body;

  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err) => {
      if (err) res.send("Error");
      else res.send("User added");
    }
  );
});

// GET USERS
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// DELETE USER
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM users WHERE id=?", [id], (err) => {
    if (err) res.send("Error");
    else res.send("User deleted");
  });
});

// START SERVER
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});