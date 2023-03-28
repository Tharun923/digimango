import React, { useState } from "react";
import { useSelector } from "react-redux";
import features, { flaggedWith } from "../../features";
import { Header, Footer, Wrapper, Search } from "../../components";
import strings from "../../utils/localization";
import Banner from "../../assets/Banner.svg";
import colors from "../../constants/colors";
import { getBillTotals } from "../../selectors/bills";

function Home() {
  const billTotals = useSelector(getBillTotals);
  const { totalSold, pendingAmount, paidAmount } = billTotals;
  const [searchInput, setSearchInput] = useState("");

  const styles = {
    bannerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    banner: {
      width: "80%",
      margin: "10px 0px",
      paddingTop: "24px",
    },
    container: {
      flexDirection: "column",
    },
    totals: {
      color: colors.SECONDARY_TEXT_COLOUR,
      display: "flex",
      flexDirection: "column",
      padding: "0px 20px",
    },
    totalItem: {
      display: "flex",
      justifyContent: "space-between",
    },
    leftTotals: {
      fontWeight: "bold",
    },
  };
  return (
    <div>
      <Header title={strings.appName} />
      <Wrapper>
        <div style={styles.container}>
          <div style={styles.bannerContainer}>
            <img style={styles.banner} src={Banner} alt="Mango Mart" />
          </div>
          <Search value={searchInput} setValue={setSearchInput} />
          <div style={styles.totals}>
            <p style={styles.totalItem}>
              <span style={styles.leftTotals}>Total Sold:</span>
              <span style={styles.rightTotals}>₹{totalSold || 0}/-</span>
            </p>
            <p style={styles.totalItem}>
              <span style={styles.leftTotals}>Pending Amount:</span>
              <span style={styles.rightTotals}>₹{pendingAmount || 0}/-</span>
            </p>
            <p style={styles.totalItem}>
              <span style={styles.leftTotals}>Paid Amount:</span>
              <span style={styles.rightTotals}>₹{paidAmount || 0}/-</span>
            </p>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default flaggedWith(features.homepage, Home);
