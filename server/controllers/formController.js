const Form = require('../models/Form');

exports.createForm = async (req, res) => {
  console.log("aggsh")
  try {
    const newForm = new Form(req.body);
    console.log(newForm)
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
