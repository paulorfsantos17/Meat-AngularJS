import * as jsonServer from 'json-server'
import { Express } from 'express'
import * as fs from 'fs'
import * as https from 'https'
const server: Express = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

import {handleAuthorization} from "./authz"
import {handleAuthentication} from "./auth"

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.use(jsonServer.bodyParser)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.post('/login', handleAuthentication)
server.use('/orders' ,handleAuthorization)


// Use default router
server.use(router)

const options = {
	cert: fs.readFileSync('./backend/keys/cert.pem'),
	key: fs.readFileSync('./backend/keys/key.pem')
}

https.createServer(options, server).listen(3002, () => {
  console.log('JSON Server is running on https://localHost:3002')

})