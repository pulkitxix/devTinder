const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:cJ3vxvEOpS5m3CKz@namastedev.refgrkv.mongodb.net/"
  );
};

module.exports = connectDB; 
