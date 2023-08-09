import React from "react";

export default function BlackHeart() {
  return (
    <div
      style={{
        display: "flex",
        transform: "rotate(45deg)",
        transformOrigin: "center",
        height: 25,
        width: 25,
      }}
    >
      <div
        style={{
          width: 6.25,
          height: 12.5,
          backgroundColor: "black",
          borderRadius: "12.5px 0 0 12.5px",
          marginTop: 6.25,
        }}
      />
      <div>
        <div
          style={{
            width: 12.5,
            height: 6.25,
            backgroundColor: "black",
            borderRadius: "12.5px 12.5px 0 0",
          }}
        />
        <div style={{ width: 12.5, height: 12.5, backgroundColor: "black" }} />
      </div>
    </div>
  );
}
