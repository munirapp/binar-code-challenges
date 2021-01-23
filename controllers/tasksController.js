const db = require("../models");

class TasksController {
  async get(req, res) {
    const data = await db.tasks.findAll({
      attributes: ["id", "users_id", "description", "status"],
    });
    res.json(data);
  }
  async post(req, res) {
    const users_id = req.body["users_id"];
    const description = req.body["description"];
    await db.tasks.create({
      users_id: users_id,
      description: description,
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send("success insert tasks");
  }
  async put(req, res) {
    const description = req.body["description"];
    const status = req.body["status"];
    const id = req.body["id"];
    await db.tasks.update(
      { description: description, status: status },
      { where: { id: id } }
    );
    res.send("success update tasks with id " + id);
  }
  async delete(req, res) {
    const id = req.query["id"];
    await db.tasks.destroy({ where: { id: id } });
    res.send("success delete tasks with id " + id);
  }
}

module.exports = Object.freeze(new TasksController());
