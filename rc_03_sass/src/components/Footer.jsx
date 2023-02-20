import React from "react";

import FooterStyle from "../scss/footer.module.scss";

const Footer = () => {
  return (
    <div>
      <p>Copyright by Bekir {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
