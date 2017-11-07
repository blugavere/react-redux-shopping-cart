const execSync = require('child_process').execSync

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv)
  })

exec('babel lib -d dist --ignore __tests__', {
  BABEL_ENV: 'cjs'
})