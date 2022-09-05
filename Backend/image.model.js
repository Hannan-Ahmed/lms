const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
  img: {
    data: Buffer,
    contentType: String,
    name: String,
  },
 
});

module.exports = ImageModel = mongoose.model("Image", imgSchema);