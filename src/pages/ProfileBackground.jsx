import React from "react";

export default function Background({ children }) {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-blue-800 via-blue-300 via-orange-300 to-orange-800">
      {children}
    </div>
  );
}