import React from 'react';

export const Costs = ({ costs }) => {
         return (
           <table className="table table-hover">
             <thead>
               <tr>
                 <th scope="col">Клиент</th>
                 <th scope="col">Бренд</th>
                 <th scope="col">Кол-во</th>
                 <th scope="col">Сумма</th>
               </tr>
             </thead>
             <tbody>
               {costs.map(cost => (
                 <tr key={cost.id}>
                   <td>{cost.name}</td>
                   <td>{cost.car}</td>
                   <td>{cost.numberOfCars}</td>
                   <td>{cost.amount}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         );
       };