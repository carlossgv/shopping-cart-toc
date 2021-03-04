import React from 'react';

const TotalTable = (props) => {
  return (
    <>
      <table className="subTotalTable">
        <tbody>
          <tr>
            <th className="tableHeader">Order value</th>
            <td className="tableSubTotal">${props.total}</td>
          </tr>
          <tr>
            <th className="tableHeader">Shipping</th>
            <td className="tableSubTotal">$0.00</td>
          </tr>
        </tbody>
      </table>
      <table className="totalTable">
        <tbody>
          <tr>
            <th className="tableHeader">Total</th>
            <td className="tableSubTotal">${props.total}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TotalTable;
