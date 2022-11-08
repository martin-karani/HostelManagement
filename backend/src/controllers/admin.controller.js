const admin = require("../services/admin.service");

async function getMe(req, res, next) {
  try {
    console.log(req.query.page);
    res.json(await student.getMe(req.query.page));
  } catch (err) {
    console.error(`Error while getting student`, err.message);
    next(err);
  }
}

async function adminRegister(req, res, next) {
  try {
    res.json(await student.create(req.body));
  } catch (err) {
    console.error(`Error while creating student`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await student.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating student`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await student.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting student`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
};
