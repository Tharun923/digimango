import React from "react";
import colors from "../../constants/colors";
import { isEmpty } from "lodash";

function Search({ value, setValue }) {
  const styles = {
    container: {
      display: "flex",
      margin: "10px",
      padding: "10px 0px",
      color: colors.SECONDARY_TEXT_COLOUR,
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: "25px",
      marginBottom: "20px",
      borderBottom: "1px solid" + colors.SECONDARY_TEXT_COLOUR,
    },
    input: {
      border: "none",
      fontSize: "14px",
      color: colors.SECONDARY_TEXT_COLOUR,
    },
    icon: {
      fontSize: "14px",
    },
  };
  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search Bills"
      ></input>
      {isEmpty(value) ? (
        <i style={styles.icon} className="fa fa-search"></i>
      ) : (
        <i
          style={styles.icon}
          className="fa fa-close"
          onClick={() => setValue("")}
        ></i>
      )}
    </div>
  );
}

export default Search;
