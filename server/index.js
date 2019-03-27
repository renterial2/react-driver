const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const jwt = require('jsonwebtoken')
const jwksClient = require('jwks-rsa')

const client = jwksClient({
  jwksUri: 'https://renterial.auth0.com/.well-known/jwks.json'
})

const players = [
  { id: 'a1', maxScore: 23, name: 'Bruno Krebs' },
  { id: 'c3', maxScore: 9, name: 'Diego Poza' },
  { id: 'b2', maxScore: 12, name: 'Jeana Tahnk' },
  { id: 'f6', maxScore: 15, name: 'Kim Maida' },
  { id: 'e5', maxScore: 5, name: 'Luke Oliff' },
  { id: 'd4', maxScore: 14, name: 'Sebastián Peyrott' },
]

// console.log(players)

const verifyPlayer = (token, cb) => {
  const uncheckedToken = jwt.decode(token, {complete: true})
  const kid = uncheckedToken.header.kid

  client.getSigningKey(kid, (err, key) => {
    const signingKey = key.publicKey || key.rsaPublicKey

    jwt.verify(token, signingKey, cb)
  })
}

const newMaxScoreHandler = (payload) => {
  let foundPlayer = false
  players.forEach((player) => {
    if (player.id === payload.id) {
      foundPlayer = true;
      player.maxScore = Math.max(player.maxScore, payload.maxScore)
      console.log(player)
    }
  })

  if (!foundPlayer) {
    players.push(payload)
  }

  io.emit('players', players)
}

io.on('connection', (socket) => {
  const { token } = socket.handshake.query;

  verifyPlayer(token, (err) => {
    // console.log(token)
    if (err) socket.disconnect()
    io.emit('players', players)
  })

  socket.on('new-max-score', newMaxScoreHandler)
})

http.listen(3001, () => {
  console.log('listening on port 3001')
})