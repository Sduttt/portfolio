import React, { useState } from "react";
import PackageContext from "./Context";

const Provider = (props) => {
  const [mode, setMode] = useState("dark");
  return (
    <PackageContext.Provider
      value={{
        data: mode,
      }}>
      {props.children}
    </PackageContext.Provider>
  );
};
export default Provider;
