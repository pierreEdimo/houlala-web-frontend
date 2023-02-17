import React from "react";

type Props = {
  children: React.ReactNode
}

const InnerLayout: React.FC<Props> = ({ children }) => {
  return (
    <div style={{
      padding: "1rem 0 1rem 0",
      width: "100%",
      height: "100%"
    }}>
      {children}
    </div>
  );
};

export default InnerLayout;