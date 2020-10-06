var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titre: 'L1-GL', projet: "ISIPA", taille: 20 });
});

router.get("/bonjour/:nom", function (req, res) {
  var nom = req.params.nom;
  res.render('bonjour', {nom})
})
module.exports = router;
//module.exports.test = "Bonjour"