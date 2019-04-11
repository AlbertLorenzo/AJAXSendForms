const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.post('/', (req, res, next) => {
    res.send(req.body);
});

router.put('/', (req, res, next) => {
    res.send('update');
});

router.delete('/', (req, res, next) => {
    res.send('delete');
});

module.exports = router;