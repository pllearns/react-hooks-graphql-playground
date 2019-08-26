const fastify = require('fastify')
const path = require('path')

const appShellHandler = require('./handlers/app-shell')
const graphqlPlugin = require('./graphql.js')

function main() {
  const app = fastify({
    logger: true
  })

  app.register(require('fastify-static'), {
    root: path.join(process.cwd(), 'build/public')
  })

  app.register(graphqlPlugin)

  app.get('/', appShellHandler)
  app.get('/listUsers', appShellHandler)

  app.listen(3000)
}

main()