var express = require('express');
var router = express.Router();

const BioskopController = require("../controller/bioskop")
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari Bioskop router');
// });

//insert
router.post('/', BioskopController.createBioskop);

//select
router.get("/", BioskopController.readBioskop);

//delete
router.delete('/:id', BioskopController.deleteBioskop);

//update
router.put('/:id', BioskopController.updateBioskop);

module.exports = router;


