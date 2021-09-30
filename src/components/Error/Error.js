import React from "react";

const errorStyle = {
  width: "20%",
  margin: "50px auto",
  color: "red",
  lineHeight: "40px",
  fontSize: "1.8rem",
  textAlign: "center",
  fontWeight: "bold"
};

const Error = () => {
  return (
    <div style={errorStyle}>
      <p>
        No Page Found.
      </p>
    </div>
  );
};

export default Error;
