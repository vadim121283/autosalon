module.exports = (sequelize, DataTypes) => {
  const Dealership = sequelize.define(
    "Dealership",
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
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 50]
        }
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isNumeric: true,
          len: [11]
        }
      }
    },
    {
      sequelize,
      underscored: true,
      tableName: "dealerships"
    }
  );

  // У этого салона есть определенные модели машин
  Dealership.associate = function(models) {
    models.Dealership.hasMany(models.Car);
  };

  return Dealership;
};
