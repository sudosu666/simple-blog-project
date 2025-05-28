// components/ui/card.tsx
import React from 'react';

export const Card = ({ children, className }: any) => (
  <div className={`rounded-lg shadow p-4 bg-white ${className}`}>{children}</div>
);

export const CardHeader = ({ children }: any) => (
  <div className="border-b pb-2 mb-2">{children}</div>
);

export const CardContent = ({ children }: any) => (
  <div className="text-gray-700">{children}</div>
);

export const CardFooter = ({ children }: any) => (
  <div className="border-t pt-2 mt-2">{children}</div>
);
