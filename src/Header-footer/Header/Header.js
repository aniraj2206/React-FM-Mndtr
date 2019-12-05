import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div>
      <div class="header">
        <img
          class="airImage"
          alt="Air-Type"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-tTruy6GJIy1_PqVwLnFuM50AeGD4YGvL82cX3GweFb29Awb&s"
        />
        <span class="heading"> AniRaj Airlines </span>
      </div>
    </div>
  );
}

export default Header;
