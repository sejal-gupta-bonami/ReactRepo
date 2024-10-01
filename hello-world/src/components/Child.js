import React from "react";

function Child(props) {
  return (
    <div>
      <button onClick={() => props.nameHandler("child")}>click here</button>
    </div>
  );
}

export default Child;
