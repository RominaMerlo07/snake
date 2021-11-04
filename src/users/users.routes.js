const express = require("express");
const app = express();
const router = express.Router();
const userControllers = require("./users.controller");

router.get("/", userControllers.getUsers);
router.get("/getUserByUsername/:username", userControllers.getUserByUsername);
router.get("/:id", userControllers.getUsersById);
router.post("/create", userControllers.createUser);
router.put("/updateUser/:id", userControllers.updateUser);
router.delete("/deleteUser/:id", userControllers.deleteUser);

module.exports = router;
