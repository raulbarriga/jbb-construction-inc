import React, { useEffect, useState } from "react";

import { GrUp } from "react-icons/gr"

export default function ScrollToTop() {
  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="scroll-to-top">
        <div onClick={scrollToTop}>
          <GrUp size="large" />
        </div>
    </div>
  );
}
