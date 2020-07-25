import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers.js";

const typeDefs = `
    type Query {
        labels: [Label]
        plastics: [Plastic]
        configs( team: String ): TeamConfig
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
        machine: String!
    }

    type TeamConfig {
        _id: ID!
        team: String!
        inspectors: [Inspector]
        operators: [Operator]
    }

    type Inspector {
        _id: ID!
        inspector: String!
    }

    type Operator {
        _id: ID!
        operator: String!
    }

    type Plastic {
        _id: ID!
        header: String!
        color: String!
        text: String!
        intRef: String!
        pieces: String!
        machine: String!
    }

    type Mutation { 
        newLabel(_id: ID, input: NewLabel): Label
        updateLabel(_id: ID, input: NewLabel): Label

        newPlastic(_id: ID, input: NewPlastic): Plastic
        updatePlastic(_id: ID, input: NewPlastic): Plastic

        updateConfig(_id: ID, input: ConfigInput): TeamConfig
    }

    input ConfigInput{
        inspectors: [InspectorInput]
        operators: [OperatorInput]
    }

    input InspectorInput {
        _id: ID
        inspector: String
    }

    input OperatorInput {
        _id: ID
        operator: String
    }

    input NewLabel {
        header: String!
        intRef: String!
        clientRef: String!
        certification: String!
        pieces: String!
        color: String!
        text: String!
        machine: String!
    }

    input NewPlastic {
        header: String!
        color: String!
        text: String!
        intRef: String!
        pieces: String!
        machine: String!
    }

`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});