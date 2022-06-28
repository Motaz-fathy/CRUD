const mongoose = require("mongoose");

const countrieSchema = mongoose.Schema({
  domains: { type: String, required: true },
  link: { type: String, required: true },
  name: { type: String, required: true },
  country: { type: String, required: true },
  code: { type: String, required: true }
}

);

const Countrie = mongoose.model("countrie", countrieSchema);
module.exports = Countrie;
