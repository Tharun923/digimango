import React from "react";
import { get } from "lodash";
import { formatDate } from "../../utils/formatting";
import colors from "../../constants/colors";

function BillHistoryItem({ billId, bills }) {
  const billData = get(bills, `${billId}`);
  const styles = {
    container: {
      display: "flex",
      justifyContent: "flex-start",
      margin: "5px",
      padding: "10px",
      backgroundColor: colors.SECONDARY_TEXT_COLOUR,
      color: colors.SECONDARY_ACTIVE_COLOR,
      borderRadius: "10px",
    },
    leftContent: {
      display: "flex",
      flexDirection: "column",
      width: "60%",
      justifyContent: "center",
    },
    rightContent: {
      display: "flex",
      justifyContent: "space-between",
      width: "40%",
    },
    custName: {
      fontSize: "16px",
      fontWeight: "bold",
    },
    quantity: {
      color: colors.SECONDARY_COLOUR,
      fontSize: "10px",
    },
    amount: {
      display: "flex",
      alignItems: "center",
    },
    date: {
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
    },
    icon: {
      paddingLeft: "4px",
    },
  };
  return (
    <div style={styles.container} key={billId}>
      <div style={styles.leftContent}>
        <div style={styles.custName}>{billData.custName}</div>
        <div style={styles.quantity}>{billData.quantity} dozens</div>
      </div>
      <div style={styles.rightContent}>
        <div style={styles.amount}>₹{billData.amount}/-</div>
        <div style={styles.date}>
          {formatDate(billData.paidDate)}{" "}
          <i style={styles.icon} className="fa fa-clock-o"></i>
        </div>
      </div>
    </div>
  );
}

export default BillHistoryItem;
