'use strict'

const config = {
   client: {
      endpoints: {
         pictures: 'http://api.picter.com/picture',
         users: 'http://api.picter.com/user',
         auth: 'http://api.picter.com/auth'
      }
   },
   auth: {
      facebook: {
         callbackURL: 'http://picter.com/auth/facebook/callback'
      }
   }
}
if (process.env.NODE_ENV !== 'production') {
   config.client.endpoints = {
      pictures: 'http://localhost:5000',
      users: 'http://localhost:5001',
      auth: 'http://localhost:5002',
   }

   config.auth.facebook.callbackURL = 'http://picter.test:5050/auth/facebook/callback'
}
module.exports = config;