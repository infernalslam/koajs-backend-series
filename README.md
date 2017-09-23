## Example Node Server w/ Koa.js
Getting Started <br>
First we'll install <code>package.json</code> <br>
Then we'll add our first <code> npm run dev </code> script in package.json.
```Javascript
{
  "dependencies": {
    "koa": "^2.3.0",
    "koa-router": "^7.2.1"
  },
  "name": "koajs-medium",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js"
  },
  "author": "",
  "description": ""
}

```
we'll create our server in <code>index.js</code>
```Javascript
const Koa = require('koa')
const route = require('./route')

const app = new Koa()
const port = 5000

app.use(route.routes())
app.use(route.allowedMethods())

app.listen(port, () => {
  console.log(`running on port : http://localhost:${port}`)
})

```
Then we'll create route
```Javascript
var Router = require('koa-router')

const router = Router()

router.get('/', (ctx) => {
  ctx.body = { text: 'Hello Koajs' }
})

module.exports = router

```

### Next Step setup babel for ES6
install npm package
```
$ npm i babel-cli babel-register babel-preset-es2015 babel-preset-stage-2 --save-dev
```
So, create .babelrc file
```json
{
  "presets": ["es2015", "stage-2"]
}

```
And Now create folder bin for run dev package <code>./bin/dev.js </code>
```Javascript
require('babel-register')
require('./../index')

```
everything to change const x = require() change import And ES6
```Javascript
const x = require() // change require first test setup babel
import x from './'

```
 
