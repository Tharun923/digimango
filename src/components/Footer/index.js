import React from "react";
import colors from "../../constants/colors";
import { useHistory, useLocation } from "react-router-dom";
import paths from "../../routes/paths";

function Footer() {
  const history = useHistory();
  const location = useLocation();
  const currentPath = location.pathname;

  const styles = {
    container: {
      position: "fixed",
      bottom: "0",
      right: "0",
      width: "100%",
      filter: "drop-shadow(2px -5px 15px rgba(85, 94, 88, 0.09))",
      backgroundColor: colors.BACKGROUND_COLOR,
      color: colors.PRIMARY_COLOUR,
      height: "60px",
      borderRadius: "10px 10px 0px 0px",
    },
    controls: {
      display: "flex",
      width: "50%",
      justifyContent: "space-around",
      transform: "translateY(50%)",
    },
    addBtnOuter: {
      float: "right",
      backgroundColor: colors.PRIMARY_ACTIVE_COLOR,
      color: colors.SECONDARY_TEXT_COLOUR,
      transform: "translateY(-90%)",
      marginRight: "32px",
      borderRadius: "50%",
      fontSize: "24px",
      border: "5px solid " + colors.SECONDARY_TEXT_COLOUR,
    },
    addBtnInner: {
      backgroundColor: colors.SECONDARY_TEXT_COLOUR,
      color: colors.PRIMARY_ACTIVE_COLOR,
      borderRadius: "50%",
      padding: "8px 16px",
      fontSize: "24px",
      border: "2px solid " + colors.PRIMARY_ACTIVE_COLOR,
    },
    footerButton: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "10px",
    },
    footerIcon: {
      fontSize: "20px",
    },
    active: {
      color: colors.PRIMARY_ACTIVE_COLOR,
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.controls}>
        <div
          style={
            currentPath === paths.home
              ? { ...styles.footerButton, ...styles.active }
              : styles.footerButton
          }
          onClick={() => history.push(paths.home)}
        >
          <i style={styles.footerIcon} className="fa fa-home"></i>
          <span>Home</span>
        </div>
        <div
          style={
            currentPath.includes(paths.pendingBills)
              ? { ...styles.footerButton, ...styles.active }
              : styles.footerButton
          }
          onClick={() => history.push(paths.pendingBills)}
        >
          <i style={styles.footerIcon} className="fa fa-file-text-o"></i>
          <span>Pending</span>
        </div>
        <div
          style={
            currentPath.includes(paths.billHistory)
              ? { ...styles.footerButton, ...styles.active }
              : styles.footerButton
          }
          onClick={() => history.push(paths.billHistory)}
        >
          <i style={styles.footerIcon} className="fa fa-clock-o"></i>
          <span>History</span>
        </div>
      </div>
      <div
        style={styles.addBtnOuter}
        onClick={() => history.push(paths.addBill)}
      >
        <div style={styles.addBtnInner}>
          <i className="fa fa-plus"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
