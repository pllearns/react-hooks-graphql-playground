const { getbundlePath } = require('../helpers/manifest')

function renderHead() {
  return `
    <head>
      <title>Hello World!</title>
    </head>
  `
}

async function renderScripts() {
  const appShellBundlePath = await getbundlePath('app-shell.js')
  return `
    <script src="${appShellBundlePath}"></script>
  `
}

async function appShellHandler(req, reply) {
  const head = renderHead()
  const scripts = renderScripts()

  const html = `
    <!DOCTYPE html>
    <html>
      ${head}
      <body>
        <div id="app-root"></div>
        ${scripts}
      </body>
    </html>
  `
  reply.type('text/html')
  return html
}

module.exports = appShellHandler