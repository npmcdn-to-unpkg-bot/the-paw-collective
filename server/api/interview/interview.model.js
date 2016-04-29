'use strict';

import mongoose from 'mongoose';

var InterviewSchema = new mongoose.Schema({
  title: String,
  owner: String,
  animal: String,
  images: [{
  		animal: String,
      animal_thumbnail: String,
  	 	owner: String
  }],
  article: [{ 
  		question: String, 
  		answer: String
  }],
  date: { type: Date, default: Date.now },
  active: Boolean
});

export default mongoose.model('Interview', InterviewSchema);
