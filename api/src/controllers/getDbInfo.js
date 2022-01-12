const { Dog, Temperament } = require( '../db');

const getDbInfo = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament, 
            attributes: [ 'name' ],
            through: {
                attributes: [],
            }
        }
    })
}

module.exports = getDbInfo;