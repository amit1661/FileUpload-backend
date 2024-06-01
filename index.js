//app create
const express = require("express");
const app = express();

//PORT find krna h
require("dotenv").config();
const PORT = process.env.PORT || 5000;

//middleware add krna h
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

//db connnection
const db = require("./config/database");
db.connect();

//cloud connection
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//api route mount krna h
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

//app start
app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
