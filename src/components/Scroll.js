import React from "react";

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "60vh",
        backgroundColor: "#dedfe0",
        padding: "2em 0",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
