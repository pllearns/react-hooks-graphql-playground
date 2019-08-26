const fastifyGQL = require('fastify-gql')

const userlist = [
  {
    name: 'Steve'
  },
  {
    name: 'Carol'
  },
  {
    name: 'Natasha'
  },
  {
    name: 'Howard'
  }
]

const schema = `
  type User {
    name: String
  }

  type Query {
    users: [User]
  }
`

const resolvers = {
  Query: {
    users() {
      return userlist
    }
  }
}

function registerGraphQL(fastify, opts, next) {
  fastify.register(fastifyGQL, {
    schema, 
    resolvers, 
    graphiql: true
  })

  next()
}

module.exports = registerGraphQL