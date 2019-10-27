import React from 'react';

export const Spends = ({ spends }) => {
         return (
           <table className="table table-hover">
             <thead>
               <tr>
                 <th scope="col">Клиент</th>
               </tr>
             </thead>
             <tbody>
               {spends.map(spend => (
                 <tr key={spend.id}>
                   <td>{spend.name}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         );
       };