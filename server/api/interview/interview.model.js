'use strict';

import mongoose from 'mongoose';

var InterviewSchema = new mongoose.Schema({
  title: String,
  owner: String,
  animal: String,
  article: [{ question: String, answer: String}],
  date: { type: Date, default: Date.now },
  active: Boolean
});

export default mongoose.model('Interview', InterviewSchema);
