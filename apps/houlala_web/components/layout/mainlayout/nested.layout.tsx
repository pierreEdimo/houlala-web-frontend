import React from "react";
import { HoulalaDefaultLayout } from "ui";

type Props = {
  children: React.ReactNode
}

export const NestedLayout: React.FC<Props> = ({ children }) => {
  return (
    <HoulalaDefaultLayout>
      {children}
    </HoulalaDefaultLayout>
  );
};