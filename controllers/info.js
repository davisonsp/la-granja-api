'use strict'

var InfoController = () => { };

InfoController.info = (req, res) => {
    return res.status(200).send({ message: 'Info La-Granja v2' });
}

module.exports = InfoController;