import React from "react";
import { ButtonProps } from "./buttonProps";
import { cn } from "../../lib/utils";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-300",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
