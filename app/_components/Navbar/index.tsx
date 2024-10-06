import React from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import styles from "./styles.module.css";

function Navbar() {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-14 z-50 ${styles.searchContainer}`}
    >
      <div className="block sm:hidden">
        <Mobile />
      </div>

      <div className="hidden sm:block">
        <Desktop />
      </div>
    </nav>
  );
}

export default Navbar;
