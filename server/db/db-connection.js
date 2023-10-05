const { Pool } = require('pg');
const db = new Pool({
  connectionString: 'postgres://localhost:5433/newcontacts'
});

module.exports = db;  


// const { Pool } = require('pg');
// const db = new Pool({
//     connectionString: process.env.DB_URI
//   });

//   module.exports = db;