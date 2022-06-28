const Countrie = require("../models/countriesModel");

const countries = {};

countries.GetAll = async (req, res) => {
  try {
    const countries = await Countrie.find({});
    res.status(201).json(countries);
  } catch (error) {
    res.status(400).json({ message: "server interupted" });
  }
};

countries.Add = async (req, res) => {
  const { domains, country, name, code, link } = req.body;
  console.log(req.body);
  try {
    const exist = await Countrie.findOne({ name });
    if (exist) {
      res.status(401).json({ message: "already exist C" });
    } 
    else {
        const countrie = await Countrie.create({
            domains,
            country,
            name,
            code,
            link
          });
          res.status(200).json(countrie);
    }
    
  } catch (error) {
    res.status(400).json({ message: "Invalid Countrie data" });
  }
};

module.exports = countries;
