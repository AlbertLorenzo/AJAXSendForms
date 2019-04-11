const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.post('/', (req, res, next) => {
    res.json(req.body);
});

router.put('/', (req, res, next) => {
    res.send('put');
});

router.delete('/', (req, res, next) => {
    res.send('delete');
});

module.exports = router;