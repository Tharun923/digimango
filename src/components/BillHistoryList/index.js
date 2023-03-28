import React from "react";
import { useSelector } from "react-redux";
import { BillHistoryItem } from "../../components";
import { getBills, getBillsHistory } from "../../selectors/bills";
import { get } from "lodash";

function BillHistoryList({ searchInput }) {
  const bills = useSelector(getBills);
  const billsHistory = useSelector(getBillsHistory);
  return (
    <div>
      {billsHistory
        .filter((eachBill) => {
          if (searchInput === "") {
            return eachBill;
          }
          const billData = get(bills, `${eachBill}`);
          if (
            billData.custName
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            billData.amount.toString().includes(searchInput.toLowerCase())
          ) {
            return eachBill;
          }
          return null;
        })
        .map((eachBill) => (
          <BillHistoryItem billId={eachBill} bills={bills} />
        ))}
    </div>
  );
}

export default BillHistoryList;
