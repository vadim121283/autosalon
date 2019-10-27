import React from 'react';
import Moment from "react-moment";

export const Orders = ({ orders }) => {
         return (
           <table className="table table-hover">
             <thead>
               <tr>
                 <th scope="col">Клиент</th>
                 <th scope="col">Сумма</th>
                 <th scope="col">Дата</th>
               </tr>
             </thead>
             <tbody>
               {orders.map(order => (
                 <tr key={order.id}>
                   <td>{order.name}</td>
                   <td>{order.amount}</td>
                   <td>
                     <Moment format="DD-MM-YYYY">{order.date}</Moment>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         );
       };