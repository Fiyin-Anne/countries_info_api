module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING,
    capital: DataTypes.STRING,
    population: DataTypes.INTEGER
  },
)
return Country;
};