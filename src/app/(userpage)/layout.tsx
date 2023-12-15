
import React, { ReactNode } from "react";
import CustomeBar from "@/component/MessagePage/CustomeBar";
import AppBar from "../../component/MessagePage/AppBar";

interface LayoutProps {
  children: ReactNode;
}

export default function UserPageLayout({ children }: LayoutProps) {

  return (
    <CustomeBar>
      {children}
    </CustomeBar>
    // <AppBar>
    //   {children}
    // </AppBar>

  );
}
