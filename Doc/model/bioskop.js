const mongoose = require("mongoose");

const bioskopSchema = new mongoose.Schema({
    judul : {type : String, required : true},
    sutradara : {type : String, required : true},
    genre : [{type : String, required : true}]
});

module.exports = mongoose.model("Bioskop", bioskopSchema);

