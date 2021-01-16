const db = require("../models");

class UsersController {
  async get(req, res) {
    const data = await db.users.findAll({ attributes: ["id", "full_name"] });
    res.json(data);
  }
  async post(req, res) {
    const fullName = req.body["full_name"];
    await db.users.create({
      full_name: fullName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send("sucess insert data " + fullName);
  }
  async put(req, res) {
    const fullName = req.body["full_name"];
    const id = req.body.id;
    await db.users.update({ full_name: fullName }, { where: { id: id } });
    res.send(`success update id ${id} with new full name ${fullName}`);
  }
  async delete(req, res) {
    const id = req.query.id;
    await db.users.destroy({ where: { id: id } });
    res.send("sucess delete data from users with id " + id);
  }
}

module.exports = Object.freeze(new UsersController());
