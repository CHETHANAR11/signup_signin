const mongoose = require("mongoose");

const SystemDetailsSchema = new mongoose.Schema(
   {
    browserName:String,
    browserVersion:Number,
    osName:String,
    deviceType:String,
   },
   {
       collection:"SystemInfo",
   }
);

mongoose.model("SystemInfo",SystemDetailsSchema);