import React from "react";
import { useHistory } from "react-router-dom";
import colors from "../../constants/colors";
function Header(props) {
  const history = useHistory();
  const styles = {
    container: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      filter: "drop-shadow(2px -5px 15px rgba(85, 94, 88, 0.09))",
      color: colors.PRIMARY_ACTIVE_COLOR,
      height: "60px",
      backgroundColor: colors.SECONDARY_TEXT_COLOUR,
      borderBottom: "1px solid" + colors.SECONDARY_COLOUR,
      fontWeight: "Bold",
    },
    header: {
      display: "flex",
      transform: "translateY(100%)",
      justifyContent: "space-between",
    },
    backBtn: {
      marginLeft: "20px",
    },
    title: {
      fontSize: "16px",
    },
    amount: {
      marginRight: "20px",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <i
          style={styles.backBtn}
          onClick={() => history.goBack()}
          className="fa fa-angle-left"
        ></i>
        <span style={styles.title}>{props.title}</span>
        <span style={styles.amount}>
          {props.amount && <> ₹{props.amount || 0}/-</>}
        </span>
      </div>
    </div>
  );
}

export default Header;
