const { model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

//create user model
class User extends Model {}

// define table columns and configuration
User.init(
    {
      // TABLE COLUMN DEFINITIONS GO HERE
      id: {
          type: Datatypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      username: {
          type: Datatypes.STRING,
          allowNull: false
      },
      email: {
          type: Datatypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              isEmail: true
          }
      },
      password: {
          type: Datatypes.STRING,
          allowNull: false,
          validate: {
              len: [4]
          }
      }
    },
    {
      // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))
  
      // pass in our imported sequelize connection (the direct connection to our database)
      sequelize,
      // don't automatically create createdAt/updatedAt timestamp fields
      timestamps: false,
      // don't pluralize name of database table
      freezeTableName: true,
      // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
      underscored: true,
      // make it so our model name stays lowercase in the database
      modelName: 'user'
    }
  );
  
  module.exports = User;