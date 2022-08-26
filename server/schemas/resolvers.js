const { AuthenticationError } = require('apollo-server-express');
const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    techs: async () => {
        return Tech.find();
    },
    matchups: async () => {
        return Matchup.find();
    },
    matchup: async(parent, {id}) => {
        return Matchup.findOne({_id: id});
    }
  },

  Mutation: {
    createMatchup: async (parent, {tech1, tech2}) => {
        const matchup = await Matchup.create({tech1, tech2});
        return matchup;
    },
    createVote: async (parent, {id, techNum}) => {
        const vote = await Matchup.findOneAndUpdate(
            { _id: id },
            { $inc: { [`tech${techNum}_votes`]: 1 } },
            { new: true }
          );
        return vote;
    },
  },
};

module.exports = resolvers;
