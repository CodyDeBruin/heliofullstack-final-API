//
//  DB SETUP DONE HERE
//  Mongo is currently set up 
//

const monk = require('monk')

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const db = monk(`mongodb://${username}:${password}@ds161960.mlab.com:61960/profilesite`);

module.exports = {
    db,
}