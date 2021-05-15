var axios = require('axios');

async function loadAuth (context, next) {
   try {
      var whoami = await axios.get('/whoami').then(res => res.data)
      if (whoami.username) {
         context.auth = whoami
      } else {
         context.auth = false
      }
      next()
   } catch (err) {
      console.log(err)
   }
}

exports.loadAuth = loadAuth;