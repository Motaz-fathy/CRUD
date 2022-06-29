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
countries.GetSingle = async (req, res) => {
  try {
    const Singlecountry = await Countrie.findOne({_id : req.params.id});
    res.status(201).json(Singlecountry);
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
    } else {
      const Createdcountry = await Countrie.create({
        domains,
        country,
        name,
        code,
        link
      });
      res.status(200).json(Createdcountry);
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid Countrie data" });
  }
};

countries.Update = async (req, res) => {
  const { domains, country, name, code, link } = req.body;
  const countryOne = await Countrie.findById( req.params.id );
  console.log(countryOne)
  if(countryOne) {
    countryOne.domains = domains || countryOne.domains
    countryOne.country = country || countryOne.country
    countryOne.name = name || countryOne.name
    countryOne.code = code || countryOne.code
    countryOne.link = link || countryOne.link
    const updatedcountry = await countryOne.save();
      res.status(200).json(updatedcountry);
  }
  else{
    res.status(400).json({message : "this country not found "})
  }

};

countries.Delete = async (req , res ) => {
 const country = await Countrie.findOne({_id:req.params.id})
 if(country) {
    await country.remove()
    res.status(200).json({message : " deleted successed "})
 } else {
    res.status(400).json({message : " country not found  "})

 }
}



module.exports = countries;
