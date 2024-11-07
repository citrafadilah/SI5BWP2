const Bioskop = require("../model/bioskop");

const createBioskop= (req, res) => {
    const bioskop = new Bioskop({
        judul : req.body.judul,
        penulis : req.body.penulis,
        genre : req.body.genre
    });

    //console.log(bioskop);
    bioskop.save().then((createdBioskop)=>{
        res.status(201).json({
                message : "Data berhasil disimpan",
                bookId : createdBioskop._id
        });
    });
   
};

const readBioskop = (req, res)=>{
    Bioskop.find()
    .then((documents)=>{
        res.status(201).json({
            message : "Get Data Bioskop",
            bioskops : documents
        });
    });
};

const deleteBioskop= (req, res) => {
    Bioskop.deleteOne({_id : req.params.id})
    .then((result)=>{
        res.status(200).json({
            message : "Bioskop berhasil dihapus ",
            result : result
        });
    });
};

const updateBioskop = (req, res) => {
   
     const bioskop = new Bioskop({
        _id : req.params.id,
        judul : req.body.judul,
        penulis : req.body.penulis,
        genre : req.body.genre
    });

    Bioskop.updateOne({_id : req.params.id}, bioskop)
    .then((hasil)=>{
        res.status(200).json({
            message : "Update Berhasil",
            result : hasil    
        });
    });

};


module.exports ={createBioskop, readBioskop, deleteBioskop, updateBioskop}
