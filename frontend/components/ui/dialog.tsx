import React from "react";
import { DialogProps } from "./dialogProps";


export const Dialog = ({ className, open, children, ...props }: DialogProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={_.cn("bg-white rounded-lg p-6 shadow-lg w-full max-w-md", className)}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};
