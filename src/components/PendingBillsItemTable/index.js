import React from "react";
import { useDispatch } from "react-redux";
import "./table.css";
import colors from "../../constants/colors";
import { formatDate } from "../../utils/formatting";
import { settleBill } from "../../actions/bills";

function PendingBillsItemTable({ custId, bills, billsList }) {
  const dispatch = useDispatch();

  const styles = {
    container: {
      display: "flex",
      justifyContent: "flex-start",
      margin: "5px",
      borderRadius: "10px",
      color: colors.SECONDARY_TEXT_COLOUR,
    },
    paidBtn: {
      color: colors.WHITE,
      backgroundColor: colors.SUCCESS,
      border: "none",
      borderRadius: "5px",
      padding: "4px 8px",
    },
  };

  const handleSettleBill = (custId, bill) => {
    dispatch(settleBill(custId, bill));
  };

  const renderTableHeader = () => {
    let header = ["Purchased", "Size", "Quantity", "Amount"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderTableData = () => {
    return billsList.map((bill, index) => {
      const { billId, purchasedDate, size, quantity, amount } = bills[bill]; //destructuring
      return (
        <tr key={billId}>
          <td>{formatDate(purchasedDate)}</td>
          <td>{size}</td>
          <td>
            {quantity}
            <span className="dozen"> dozens</span>
          </td>
          <td>₹{amount}/-</td>
          <td>
            <button
              style={styles.paidBtn}
              onClick={() => handleSettleBill(custId, bill)}
            >
              Settle
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div key={custId} style={styles.container}>
      <table id="bills">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
}

export default PendingBillsItemTable;
