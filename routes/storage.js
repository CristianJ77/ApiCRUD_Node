const express = require("express");
const { createItem, getItem, getItems, updateItem, deleteItem } = require("../controllers/storage");
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage");
const router = express.Router();


//TODO http://localhost/api/storage GET,POST,DELETE,PUT

//insertar item
router.post("/",uploadMiddleware.single("myfile"),createItem);

//obtener lista de items
router.get("/",getItems)

//obtener un solo item
router.get("/:id",validatorGetItem,getItem)

//eliminar item
router.delete("/:id",validatorGetItem,deleteItem)

module.exports = router; 