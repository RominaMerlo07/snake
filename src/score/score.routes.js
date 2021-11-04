const express = require("express");

const router = express.Router();

const scoreController = require("./score.controller");

router.post("/create", scoreController.insertScore);

router.get("/:id", (req, res) => {
  const id = req.params.id;
  try {
    scoreController
      .getById(id)
      .then((encontrado) => {
        if (encontrado) {
          console.log("routes: " + JSON.stringify(encontrado));
          res.status(200);
          res.send(JSON.stringify(encontrado));
        } else {
          res.status(404);
          res.send("No encontrado");
        }
      })
      .catch((error) => {
        res.sendStatus(500);
      });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put("/updateScore/:id", (req, res) => {
  const id = req.params.id;
  const score = req.body;
  try {
    scoreController
      .updateScore(id, score)
      .then((modificado) => {
        console.log("var modificado: " + modificado);
        if (modificado) {
          res.status(200);
          res.send(modificado);
        } else res.sendStatus(404);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete("/deleteScore/:id", (req, res) => {
  const id = req.params.id;
  try {
    scoreController
      .deleteScore(id)
      .then((eliminado) => {
        if (eliminado) {
          console.log("routes: " + JSON.stringify(eliminado));
          res.status(200);
          res.send(JSON.stringify(eliminado));
        } else {
          res.status(404);
          res.send("No eliminado");
        }
      })
      .catch((error) => {
        res.sendStatus(500);
      });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
