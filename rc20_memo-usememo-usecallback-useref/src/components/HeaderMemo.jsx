import React, { memo } from "react";

const HeaderMemo = memo(({ user }) => {
  console.log("Render => HeaderMemo Component");
  return (
    <div className="text-center text-success">
      HeaderMemo Componenti: {user}
    </div>
  );
});

export default HeaderMemo;
