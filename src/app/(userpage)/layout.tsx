
import React, { ReactNode } from "react";
import CustomeBar from "@/component/MessagePage/CustomeBar";

interface LayoutProps {
  children: ReactNode;
}

export default function UserPageLayout({ children }: LayoutProps) {

  return (
    <CustomeBar>
      {children}
    </CustomeBar>
  );
}
