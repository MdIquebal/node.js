const Contact = require('./Contact')


exports.getAllContact = (req, res) => {
    Contact.find()
        .then(contacts => {
            res.json(contacts)
        })
        .catch(e => {
            console.log(e)
            res.json({
                massage: 'Error Occurred'
            })
        })
}

exports.getSingleContact = (req, res) => {
    let { id } = req.params
    Contact.findById(id)
        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e)
            res.json({
                massage: 'Error Occurred'
            })
        })
}

exports.createContact = (req, res) => {
    let { name, father, mother, birth, birthDate, gender, religion, nationality, study,
        presAddress,perAddress, phone, email
        } = req.body
    let contact = new Contact({
        name,
        father,
        mother,
        birth,
        birthDate,
        gender,
        religion,
        nationality,
        study,
        presAddress,
        perAddress,
        phone,
        email
    })
    contact.save()
        .then(Contact => {
            res.json(Contact)
        })
        .catch(e => {
            console.log(e)
            res.json({
                massage: 'Error on Occurred'
            })
        })
}

exports.updateContact = (req, res) => {
    let { name, email, phone, url, password, calories } = req.body
    let { id } = req.params
    Contact.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                name, email, phone, url, password, calories
            }
        }, {new: true})
        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e)
            res.json({
                massage: 'Error Occurred'
            })
        })
}

exports.deleteContact = (req, res) => {
    let { id } = req.params
    Contact.findOneAndDelete({_id: id})
    .then(contact => {
        res.json(contact)
    })
    .catch(e => {
        console.log(e)
        res.json({
            massage: 'Error Occurred'
        })
    })
}

