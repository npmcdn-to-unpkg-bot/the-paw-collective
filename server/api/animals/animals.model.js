'use strict';

import mongoose from 'mongoose';

var AnimalsSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Animals', AnimalsSchema);
