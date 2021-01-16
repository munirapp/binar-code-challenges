const router = require("express").Router();

// Routing Users
// Create users
router.post("/users", (req, res) => res.send("routing untuk create users"));

// Read users
router.get("/users", (req, res) => res.send("routing untuk read users"));

// Update users
router.put("/users", (req, res) => res.send("routing untuk update users"));

// Delete users
router.delete("/users", (req, res) => res.send("routing untuk delete users"));

// // Routing tasks
// Create tasks
router.post("/tasks", (req, res) => res.send("routing untuk create tasks"));

// Read tasks
router.get("/tasks", (req, res) => res.send("routing untuk read tasks"));

// Read tasks
router.get("/tasks", (req, res) => res.send("routing untuk read tasks"));

// Update tasks
router.put("/tasks", (req, res) => res.send("routing untuk update tasks"));

// Delete users
router.delete("/tasks", (req, res) => res.send("routing untuk delete tasks"));

module.exports = router;
