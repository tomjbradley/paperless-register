const { Sequelize } = require("sequelize");

const connectDB = async () => {
  const sequelize = new Sequelize(
    "postgres://user:pass@example.com:5432/dbname"
  );

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
