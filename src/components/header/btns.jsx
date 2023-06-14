import React from "react";
import CV from "../../assets/SagarResume.pdf";

function btns() {
  return (
    <div>
      <a href={CV} download className="btn">
        Download CV
      </a>
    </div>
  );
}

export default btns;
