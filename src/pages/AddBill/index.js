import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Wrapper, Header, Footer, Button } from "../../components";
import colors from "../../constants/colors";
import { getConfigData } from "../../selectors/config";
import strings from "../../utils/localization";
import { isEmpty } from "lodash";

function AddBill() {
  const configData = useSelector(getConfigData);
  const [bill, setBill] = useState({
    custName: "",
    custId: "",
    size: "Small",
    quantity: 1,
    status: "unpaid",
    amount: 0,
  });
  const handleAddBill = () => {
    const curDate = new Date().getTime();
    console.log({
      ...bill,
      billId: curDate,
      custName: "",
      custId: "",
      purchasedDate: curDate,
      paidDate: bill.paid === "paid" ? curDate : null,
    });
  };
  useEffect(() => {
    if (isEmpty(bill.price)) {
      setBill({ ...bill, amount: 0 });
    } else {
      const computedAmount = parseInt(bill.price) * bill.quantity;
      setBill({ ...bill, amount: computedAmount });
    }
  }, [bill.price, bill.quantity]);

  const styles = {
    buttons: {
      padding: "10px",
      display: "flex",
      justifyContent: "space-around",
    },
    sizeOptions: {
      display: "flex",
      justifyContent: "space-around",
    },
    section: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      margin: "5px",
    },
    sizeItem: {
      backgroundColor: colors.SECONDARY_TEXT_COLOUR,
      color: colors.WHITE,
      borderRadius: "5px",
      padding: "6px",
      width: "20%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px",
    },
    selectedItem: {
      backgroundColor: colors.SECONDARY_COLOUR,
      color: colors.SECONDARY_TEXT_COLOUR,
      borderRadius: "5px",
      padding: "8px",
      width: "20%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px",
    },
    sectionHeader: {
      alignItems: "center",
      fontWeight: "Bold",
      fontSize: "20px",
    },
    quantityOptions: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      alignItems: "center",
    },
    priceInput: {
      border: "none",
      fontSize: "14px",
      color: colors.SECONDARY_TEXT_COLOUR,
    },
    priceContainer: {
      display: "flex",
      padding: "10px 0px",
      color: colors.SECONDARY_TEXT_COLOUR,
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
      borderBottom: "1px solid" + colors.SECONDARY_TEXT_COLOUR,
    },
    priceSection: {
      marginTop: "20px",
    },
    addBillBtn: {
      width: "60%",
      margin: "20px",
    },
    amount: {
      display: "flex",
      flexDirection: "column",
    },
    bottomButtons: {
      display: "flex",
      justifyContent: "space-evenly",
    },
  };
  return (
    <div>
      <Header title={strings.addBill} />
      <Wrapper>
        <div style={styles.buttons}>
          <Button title={"Add New Customer"} handleClick={() => {}} />
          <Button title={"Select Existing Customer"} handleClick={() => {}} />
        </div>
        <div style={styles.section}>
          <span style={styles.sectionHeader}>Size</span>
          <div style={styles.sizeOptions}>
            {configData.sizeOptions.map((opt) => (
              <span
                onClick={() => setBill({ ...bill, size: opt.name })}
                style={
                  opt.name === bill.size ? styles.selectedItem : styles.sizeItem
                }
              >
                <span>{opt.name}</span>
              </span>
            ))}
          </div>
        </div>
        <div style={styles.section}>
          <span style={styles.sectionHeader}>Quantity (dozens)</span>
          <div style={styles.quantityOptions}>
            {configData.quantityOptions.map((opt) => (
              <span
                onClick={() => setBill({ ...bill, quantity: opt.name })}
                style={
                  opt.name === bill.quantity
                    ? styles.selectedItem
                    : styles.sizeItem
                }
              >
                {opt.name}
              </span>
            ))}
          </div>
        </div>
        <div style={styles.section}>
          <span style={styles.sectionHeader}>Price (per dozen)</span>
          <div style={styles.priceContainer}>
            <input
              style={styles.priceInput}
              value={bill.price}
              placeholder="Enter Price"
              onChange={(e) => setBill({ ...bill, price: e.target.value })}
            />
            {!isEmpty(bill.price) && (
              <i
                style={styles.icon}
                className="fa fa-close"
                onClick={() => setBill({ ...bill, price: "" })}
              ></i>
            )}
          </div>
        </div>
        <div style={styles.bottomButtons}>
          <Button
            title={"Paid"}
            style={
              bill.status === "paid"
                ? {
                    backgroundColor: colors.SECONDARY_COLOUR,
                    color: colors.SECONDARY_TEXT_COLOUR,
                    width: "25%",
                  }
                : { width: "25%" }
            }
            handleClick={() => setBill({ ...bill, status: "paid" })}
          />
          <Button
            title={"Not Paid"}
            style={
              bill.status === "unpaid"
                ? {
                    backgroundColor: colors.SECONDARY_COLOUR,
                    color: colors.SECONDARY_TEXT_COLOUR,
                    width: "25%",
                  }
                : { width: "25%" }
            }
            handleClick={() => setBill({ ...bill, status: "unpaid" })}
          />
          <div style={styles.amount}>
            <span style={{ fontSize: "12px", fontWeight: "bold" }}>Amount</span>
            <span>₹ {bill.amount} /-</span>
          </div>
        </div>
        <Button
          style={styles.addBillBtn}
          title={"Add New Bill"}
          handleClick={handleAddBill}
        />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default AddBill;
