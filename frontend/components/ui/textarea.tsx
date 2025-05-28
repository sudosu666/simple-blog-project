import React from "react";
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={textarea(
        "border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 w-full resize-none",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

