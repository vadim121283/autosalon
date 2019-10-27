module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    "Sales",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true
        }
      },
      numberOfCars: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      amount: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      sequelize,
      underscored: true,
      tableName: "sales"
    }
  );

  // Добавит dealership_id, car_id и client_id в таблицу
  Sales.associate = function(models) {
    models.Sales.belongsTo(models.Dealership);
    models.Sales.belongsTo(models.Car);
    models.Sales.belongsTo(models.Client);
  };

  return Sales;
};
