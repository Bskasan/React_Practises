import React, { memo } from "react";

const TaxComp = ({ taxData }) => {
  console.log("Render => TaxComp Component");
  return <div>TaxComp: {taxData.current.ship}</div>;
};

export default memo(TaxComp);
