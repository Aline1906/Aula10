const controller = require("../controllers/moviesControllers"); // importei o arquivo de controller

const express = require("express");
const router = express.Router();

router.get("/", controller.home);
router.get("/todos", controller.getAll);
router.get("/titulo", controller.getByTitle)
router.get("/genero", controller.getByGenre)
router.get("/:id", controller.getById)

router.post("/creat", controller.creatMovie)

router.delete("/:id", controller.deleteMovie)

router.put("/:id", controller.replaceMovies)

router.patch("/updateLanguage/:id", controller.updateLanguage)




module.exports = router