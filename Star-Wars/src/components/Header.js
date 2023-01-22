import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://ic.pics.livejournal.com/9h4zza/74849700/235441/235441_original.png"
          alt="Logo"
          width=""
          height="200px"
          className="d-inline-block align-text-top"
        />
      </Link>
    </div>
  );
}

export default Header;
