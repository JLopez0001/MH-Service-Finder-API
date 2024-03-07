import mongoose from "mongoose";

import { Schema } from "mongoose";

/*
   If data has military service it will show as "1"
   if it doesn't it will not show at all
*/

const centerSchema = new Schema({
  name: String,
  programName: { type: String, required: false },
  street: String,
  room: { type: String, required: false },
  city: String,
  zip: String,
  phone: String,
  long: String,
  lat: String,
  website: { type: String, required: false },
  militaryServices: { type: String, required: false },
});

export default mongoose.model("centers", centerSchema);
