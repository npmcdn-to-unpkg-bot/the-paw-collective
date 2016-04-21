'use strict';

import mongoose from 'mongoose';

var AnimalsSchema = new mongoose.Schema({
  name: String,
  instagram: String,
  category: String,
  active: Boolean
});

export default mongoose.model('Animals', AnimalsSchema);
