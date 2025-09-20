import React from "react";

const headingStyle = {
  color: "red",
  textAlign: "center",
  fontSize: "24px",
};

const buttonStyle = {
  backgroundColor: "purple",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
};
const instyle = {
    color:"white",
    backgroundColor:"blue",
    textAlign:"center",
};

const Internalcss = () => {
  return (
    <div>
        <div>
            <h2
          style={{
            backgroundColor: "GrayText",
            color: "white",
            textAlign: "center",
            padding: "10px",
          }}
        >
          Internal CSS
        </h2>
        </div>
    <div>
      <h2 style={headingStyle}>Hello with Internal CSS Object</h2>
      <h2 style={instyle}>Hi</h2>
      <button style={buttonStyle}>Click Me</button>
    </div>
    </div>
  );
};

export default Internalcss;
