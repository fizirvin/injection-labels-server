import {Schema, model } from 'mongoose';

const plasticSchema = new Schema({
  header:{
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
  intRef:{
    type: String,
    required: true
  },
  pieces:{
    type: String,
    required: true
  }
});

export default model('plastics', plasticSchema);