const notFOund = function(req, res){
    res.status(403).send('Not Found!')
}

module.exports = notFOund;