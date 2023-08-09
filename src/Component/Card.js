import React, { useState } from "react";
import ShowMoreIcon from "./ShowMoreIcon";
import Avatar from "./Avatar";
import BlackHeart from "./BlackHeart";
import RedHeart from "./RedHeart";
import Down from "./Down";
import Up from "./Up";

export default function Card() {
  const [isshowmore, setshowmore] = useState(false);
  const [isheart, setheart] = useState(true);
  const handleButtonClick = () => {
    if (isshowmore === false) setshowmore(true);
    else setshowmore(false);
  };
  const handleheart = () => {
    if (isheart === false) setheart(true);
    else setheart(false);
  };

  return (
    <div>
      <div
        style={{
          border: "1.5px solid black",
          boxShadow: "1px 1px 10px black",
          maxWidth: 300,
          maxHeight: 300,
          width: 300,
          height: 300,
          marginTop: 10,
          marginLeft: 10,
          borderStartEndRadius: 10,
          borderStartStartRadius: 10,
          position: "relative",
        }}
      >
        <header
          style={{
            position: "absolute",
            width: 300,
            height: 70,
            backgroundColor: "lightgrey",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            display: "flex",
          }}
        >
          <Avatar />
          <div style={{ marginTop: 10, marginLeft: 20 }}>Title</div>
          <button
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              marginLeft: 150,
            }}
            onClick={handleButtonClick}
          >
            <ShowMoreIcon />
          </button>
        </header>
        <div
          style={{
            marginTop: 70,
            width: 300,
            height: 200,
          }}
        >
          Main Content
        </div>

        <footer
          style={{
            position: "absolute",
            bottom: 0,
            width: 300,
            height: 30,
            backgroundColor: "lightgrey",
          }}
        >
          <div style={{ display: "flex" }}>
            {isheart ? (
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  marginTop: 3,
                }}
                onClick={handleheart}
              >
                <BlackHeart />
              </button>
            ) : (
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  marginTop: 3,
                }}
                onClick={handleheart}
              >
                <RedHeart />
              </button>
            )}
            {isshowmore ? (
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  marginLeft: 220,
                  marginTop: 15,
                }}
                onClick={handleButtonClick}
              >
                <Up />
              </button>
            ) : (
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  marginLeft: 220,
                  marginBottom: 10,
                }}
                onClick={handleButtonClick}
              >
                <Down />
              </button>
            )}
          </div>
        </footer>
      </div>
      {isshowmore && (
        <div
          style={{
            border: "1.5px solid black",
            boxShadow: "1px 1px 10px black",
            maxWidth: 300,
            maxHeight: 300,
            width: 300,
            height: 200,
            marginLeft: 10,
            borderEndEndRadius: 10,
            borderEndStartRadius: 10,
          }}
        >
          subcontent
        </div>
      )}
    </div>
  );
}
