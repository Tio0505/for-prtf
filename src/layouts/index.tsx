import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./header";

export const RootLayout: React.FC = () => {
  return (
    <div className="root-layout">
      <Header />
      <Outlet />
    </div>
  );
};
