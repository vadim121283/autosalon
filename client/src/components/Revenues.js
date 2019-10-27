import React from 'react';

export const Revenues = ({ revenues }) => {
         return (
           <table className="table table-hover">
             <thead>
               <tr>
                 <th scope="col">Салон</th>
                 <th scope="col">Выручка</th>
               </tr>
             </thead>
             <tbody>
               {revenues.map(revenue => (
                 <tr key={revenue.id} >
                   <td>{revenue.name}</td>
                   <td>{revenue.revenue}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         );
       };