require('./Develop/Shop-Till-You-Drop/node_modules/dotenv/types').config();

const Sequelize = require('./Develop/Shop-Till-You-Drop/node_modules/sequelize/types');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;