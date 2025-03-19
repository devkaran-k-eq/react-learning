import React from "react";

function Logo({ width = "23px", ...props }) {
  return (
    <div {...props}>
      <img src=".\src\assets\crown.jpg" alt="" style={{ width }} />
    </div>
  );
}

export default Logo;
