import labels from './models/labels.js';
import plastics from './models/plastics.js';
import configs from './models/configs.js';

export const resolvers = {
  Query: {
    async labels(){
      return await labels.find();
    },
    async plastics(){
      return await plastics.find();
    },
    async configs(_,{ team }){
      
      return await configs.findOne({ team });
    }
  },
  Mutation: {
    async newLabel(_, { input }){
      const item = new labels(input);
      await item.save();   
      return item;
    },
    async updateLabel(_,{ _id, input }){
      return await labels.findByIdAndUpdate(_id,input, {new: true });
    },
    async updateConfig(_,{ _id, input }){
      return await configs.findByIdAndUpdate(_id,input, {new: true });
    },
    async newPlastic(_, { input }){
      const item = new plastics(input);
      await item.save();   
      return item;
    },
    async updatePlastic(_,{ _id, input }){
      return await plastics.findByIdAndUpdate(_id,input, {new: true });
    }
  }
}