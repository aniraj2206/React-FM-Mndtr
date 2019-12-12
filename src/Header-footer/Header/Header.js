import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div>
      <div className="header">
        <img
          className="airImage"
          alt="Air-Type"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-tTruy6GJIy1_PqVwLnFuM50AeGD4YGvL82cX3GweFb29Awb&s"
        />
        <span className="heading"> AniRaj Airlines </span>
      </div>
    </div>
  );
}

export default Header;
