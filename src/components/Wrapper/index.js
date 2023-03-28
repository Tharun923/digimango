import React from "react";

function Wrapper({ children }) {
  const styles = {
    wrapper: {
      marginTop: "60px",
      marginBottom: "60px",
    },
  };
  return <div style={styles.wrapper}>{children}</div>;
}

export default Wrapper;
