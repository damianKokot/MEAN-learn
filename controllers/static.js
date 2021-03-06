let express = require('express');
let router = express.Router();

router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../templates'));

router.get('/', (req, res)=>{
	res.sendfile('layouts/app.html')
});

module.exports = router;