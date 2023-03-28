import React from "react";
import colors from "../../constants/colors";

function Button({ title, handleClick, style = {} }) {
  const styles = {
    btn: {
      padding: "8px",
      backgroundColor: colors.BACKGROUND_COLOR,
      color: colors.WHITE,
      borderRadius: "5px",
    },
  };
  return (
    <button style={{ ...styles.btn, ...style }} onClick={handleClick}>
      {title}
    </button>
  );
}

export default Button;
