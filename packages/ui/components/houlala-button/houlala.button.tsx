import * as React from "react";

type Props = {
  children: React.ReactNode;
  type: string;
};

const HoulalaButton: React.FC<Props> = ({ children, type }) => {
  return <button type={type}>{children}</button>;
};

export default HoulalaButton;
