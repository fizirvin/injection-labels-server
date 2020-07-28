import {Schema, model } from 'mongoose';

const ConfigSchema = new Schema({
  team: {
    type: String,
    required: true
  },
  inspectors:[{
    _id: { type: String, required: false },
    inspector: { type: String, required: false}
  }],
  operators:[{
    _id: { type: String, required: false },
    operator: { type: String, required: false }
  }],
  quantity:[{
    _id: { type: String, required: false },
    quantity: { type: String, required: false }
  }]
});

export default model('configs', ConfigSchema);