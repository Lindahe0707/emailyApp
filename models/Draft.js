const mongoose = require("mongoose");
const { Schema } = mongoose;

const draftSchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateLastEdit: Date,
});

mongoose.model("drafts", draftSchema);