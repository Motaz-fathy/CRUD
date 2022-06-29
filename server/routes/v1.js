const express = require("express");
const countries = require("../controllers/countries");
const router = express.Router();

router.post("/", countries.Add);
router.put("/:id", countries.Update);
router.delete("/:id", countries.Delete);
router.get("/:id", countries.GetSingle);
router.get("/", countries.GetAll);

module.exports = router;
