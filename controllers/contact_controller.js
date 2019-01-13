const ContactModel = require("./../database/models/contact_model");

function newResource(req, res) {
  res.render("form");
}

function index(req, res) {
  ContactModel.find()
    .then(contacts => {
      res.json(contacts);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  //res.json(contacts);
}

function create(req, res) {
  // let name = req.body.name;
  // let email = req.body.email;
  let { name, email, enquiry } = req.body;

  ContactModel.create({ name, email, enquiry })
    .then(contact => {
      res.render("success");
    })
    .catch(err => {
      res.status(500).send(err);
    })
}

module.exports = {
  newResource,
  index,
  create
}