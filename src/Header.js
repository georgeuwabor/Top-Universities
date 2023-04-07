import React from "react";
import ProTypes from "prop-types";

const Header = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <button className="header">Test Button</button>
    </div>
  );
};

export default Header;

Header.protoType = {
  name: ProTypes.string.isRequired,
};
