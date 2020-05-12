import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers.js";

const typeDefs = `
    type Query {
        labels: [Label]
        plastics: [Plastic]
    }

    type Label {
        _id: ID!
        header: String!
        intRef: String!
        clientRef: String!
        certification: String!
        pieces: String!
        color: String!
        text: String!
    }

    type Plastic {
        _id: ID!
        header: String!
        color: String!
        text: String!
        intRef: String!
        pieces: String!
    }

    type Mutation { 
        newLabel(_id: ID, input: NewLabel): Label
        updateLabel(_id: ID, input: NewLabel): Label

        newPlastic(_id: ID, input: NewPlastic): Plastic
        updatePlastic(_id: ID, input: NewPlastic): Plastic
    }

    input NewLabel {
        header: String!
        intRef: String!
        clientRef: String!
        certification: String!
        pieces: String!
        color: String!
        text: String!
    }

    input NewPlastic {
        header: String!
        color: String!
        text: String!
        intRef: String!
        pieces: String!
    }

`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});