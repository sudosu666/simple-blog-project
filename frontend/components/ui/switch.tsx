import { input } from "framer-motion/client";
import React from "react"

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          ref={ref}
          className={input("sr-only peer")}
          {...props}
        />
        <div className="w-11 h-6 bg-gray-300 peer-checked:bg-green-500 rounded-full peer-focus:ring-2 peer-focus:ring-green-300 transition-all"></div>
      </label>
    );
  }
);

Switch.displayName = "Switch";
