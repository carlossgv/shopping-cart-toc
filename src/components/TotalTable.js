import React from 'react';
import './TotalTable.css';

const TotalTable = (props) => {
  return (
    <>
      <table className="subTotalTable">
        <tbody>
          <tr>
            <th className="tableHeader">Order value</th>
            <td className="tableSubTotal">
              ${parseFloat(props.total).toFixed(2)}
            </td>
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
            <td className="tableSubTotal">
              <strong>${parseFloat(props.total).toFixed(2)}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TotalTable;
