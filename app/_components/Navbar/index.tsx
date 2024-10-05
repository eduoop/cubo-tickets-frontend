import React from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-14 bg-white shadow z-50">
      <div className="block sm:hidden">
        <Mobile />
      </div>

      <div className="hidden sm:block">
        <Desktop />
      </div>
    </div>
  );
}

export default Navbar;
