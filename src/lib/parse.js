import Parse from 'parse'
console.log('process.env:', process.env)
Parse.initialize(process.env.VUE_APP_APP_ID);
Parse.serverURL = process.env.VUE_APP_SERVER_URL

console.log('[INFO] initated parse.com')