import {Schema, model } from 'mongoose';

const labelSchema = new Schema({
  header:{
    type: String,
    required: true
  },
  intRef:{
    type: String,
    required: true
  },
  clientRef:{
    type: String,
    required: true
  },
  certification:{
    type: String,
    required: true
  },
  pieces:{
    type: String,
    required: true
  },
  color:{
    type: String,
    required: true
  },
  text:{
    type: String,
    required: true
  },
  machine:{
    type: String,
    required: true
  }
});

export default model('labels', labelSchema);