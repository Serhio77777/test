const { Qwerty } = require('../db/index')

const get = () => Qwerty.find({})

const getOne = (id) => Qwerty.findOne({_id: id})

const create = (body) => {
    const qwerty = new Qwerty(body)
    return qwerty.save()
}

const update = (id, body) => {
    return new Promise((resolve, reject) => {
        Qwerty
            .findOne({_id: id})
            .then(data => {
                Object.keys(body).forEach(key => {
                    data[key] = body[key]
                })
                return data.save()
            })
            .then(resolve)
            .catch(reject)
    })
}

const remove = (id) => Qwerty.findByIdAndRemove(id)

module.exports = {
    get,
    getOne,
    create,
    update,
    remove
}