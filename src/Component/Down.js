import React from "react";

export default function Down() {
  return (
    <div
      style={{
        width: 10,
        height: 10,
        transform: "rotate(45deg)",
        transformOrigin: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 15,
            height: 15,
            backgroundColor: "black",
            boxShadow: "1px 1px 10px lightgrey",
            border: "1px solid lightgrey",
            position: "absolute",
            zIndex: 1,
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            backgroundColor: "lightgrey",
            border: "1px solid lightgrey",
            boxShadow: "1px 1px 10px lightgrey",
            position: "absolute",
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
}
