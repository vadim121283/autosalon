const models = require('../models');
const Sequelize = models.Sequelize;
const Op = Sequelize.Op;

/**
 * @example curl -XGET "http://localhost:8081/revenue"
 * Выручка автосалона в порядке возрастания
 * [
 *   {
 *       "id": 2,
 *       "name": "Audi-Фаворит",
 *       "revenue": 13300000
 *   },
 *   {
 *       "id": 1,
 *       "name": "BMW-Фаворит",
 *       "revenue": 19000000
 *   }
 * ]
 */

async function revenue(ctx, next) {
    let sales = [];
    try {
      sales = await models.Sales.findAll({
        include: [
          {
            model: models.Dealership
          }
        ]
      });
    } catch (err) {
      console.log(err);
      ctx.body = {
        message: err.message
      };
      ctx.status = 400;
      await next();
    }

    let body = sales.reduce(function(sumArr, item) {
        let index = sumArr.findIndex(item2 => item2.id == item.Dealership.id);
        if (index === -1) {
            sumArr.push({
              id: item.Dealership.id,
              name: item.Dealership.name,
              revenue: parseInt(item.amount)
            });
        } else {
            sumArr[index].revenue =
              sumArr[index].revenue + parseInt(item.amount);
        }
          return sumArr;
    }, []);

    body.sort( (a, b) => a.revenue - b.revenue);

    // let body = sales;
    ctx.body = body;
    await next();
}

/**
 * @example curl -XGET "http://localhost:8081/costs"
 * Затраты клиентов в порядке убывания
 * [
 *  {
 *      "id": 7,
 *       "name": "Семенов Дмитрий",
 *       "car": "BMW X3",
 *       "numberOfCars": 4,
 *       "amount": "10000000"
 *   },
 *   {
 *       "id": 6,
 *       "name": "Олейкин Роман",
 *       "car": "Audi Q6",
 *       "numberOfCars": 3,
 *       "amount": "7800000"
 *   }
 * ] 
 */
async function costs(ctx, next) {
    let sales = [];
    try {
      sales = await models.Sales.findAll({
        include: [
        {
            model: models.Car
          },
          {
            model: models.Client
          }
        ],
        order: [['amount', 'DESC']]
      });
    } catch (err) {
      console.log(err);
      ctx.body = {
        message: err.message
      };
      ctx.status = 400;
      await next();
    }

    let body = sales.map(item => {
      return {
        id: item.id,
        name: item.Client.name,
        car: item.Car.name,
        numberOfCars: item.numberOfCars,
        amount: item.amount
      };
    });

    //let body = sales;
    ctx.body = body;
    await next();
}

/**
 * @example curl -XGET "http://localhost:8081/more"
 * More 250K
 * [
 *   {
 *       "id": 1,
 *       "name": "Иванов Сергей"
 *   },
 *   {
 *       "id": 2,
 *       "name": "Коробкин Олег"
 *   }
 * ]
 */

async function more(ctx, next) {
    // Эту сумму можно заложить в параметры
    let min = 250000;

    let sales = [];
    try {
      sales = await models.Sales.findAll({
        where: {
          amount: {
              [Op.gte]: min
          }
        },
        include: [
          {
            model: models.Client
          }
        ]
      });
    } catch (err) {
      console.log(err);
      ctx.body = {
        message: err.message
      };
      ctx.status = 400;
      await next();
    }

    let body = sales.reduce(function(filtered, item) {
      let index = filtered.findIndex(item2 => item2.id == item.Client.id);
      if (index === -1) {
        filtered.push({
          id: item.Client.id,
          name: item.Client.name
        });
      }
      return filtered;
    }, []);

    //let body = sales;
    ctx.body = body;
    await next();
}

/**
 * @example curl -XGET "http://localhost:8081/orders"
 * Заказы каждого клиента в порядке убывания суммы заказа
 * [
 *   {
 *       "id": 7,
 *       "name": "Семенов Дмитрий",
 *       "amount": "10000000",
 *       "date": "2014-10-02T18:00:00.000Z"
 *   },
 *   {
 *       "id": 6,
 *       "name": "Олейкин Роман",
 *       "amount": "7800000",
 *       "date": "2014-10-01T18:00:00.000Z"
 *   }
 * ]
 */

async function orders(ctx, next) {
    let sales = [];
    try {
      sales = await models.Sales.findAll({
        include: [
          {
            model: models.Client
          }
        ],
        order: [["amount", "DESC"]]
      });
    } catch (err) {
      console.log(err);
      ctx.body = {
        message: err.message
      };
      ctx.status = 400;
      await next();
    }

    let body = sales.map(item => {
      return {
        id: item.id,
        name: item.Client.name,
        amount: item.amount,
        date: (item.date).toLocaleDateString
      };
    });

    //let body = sales;
    ctx.body = body;
    await next();
}

module.exports = {
  revenue,
  costs,
  more,
  orders
};