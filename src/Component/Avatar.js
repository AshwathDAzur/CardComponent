import React from "react";
const styleing = {
  marginTop: 10,
  marginLeft: 10,
  width: 50,
  height: 50,
  backgroundColor: "white",
  borderRadius: 100,
};

export default function Avatar() {
  return (
    <div style={{ display: "flex" }}>
      <div style={styleing}>
        <div
          style={{
            color: "black",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          <strong>AK</strong>
        </div>
      </div>
    </div>
  );
}
