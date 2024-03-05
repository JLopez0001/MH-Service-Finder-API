import mongoose from "mongoose";

import { Schema } from "mongoose";

/*
   If data has military service it will show as "1"
   if it doesn't it will not show at all
*/

const centerSchema = new Schema({
  name: String,
  programName: String,
  street: String,
  room: String,
  city: String,
  zip: String,
  phone: String,
  website: String,
  militaryServices: String,
});

export default mongoose.model("centers", centerSchema);
