import React from "react";

const styleing = {
  marginTop: 1.5,
  width: 6,
  height: 6,
  backgroundColor: "black",
  borderRadius: 100,
};

export default function ShowMoreIcon() {
  return (
    <div>
      <div style={styleing} />
      <div style={styleing} />
      <div style={styleing} />
    </div>
  );
}
