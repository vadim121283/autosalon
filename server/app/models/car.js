module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define(
    "Car",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 20]
        }
      }
    },
    {
      sequelize,
      underscored: true,
      tableName: "cars"
    }
  );

  // Добавит dealership_id в таблицу
  Car.associate = function(models) {
    models.Car.belongsTo(models.Dealership);
  };

  return Car;
};
