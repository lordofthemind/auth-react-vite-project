// Base.jsx
import React from "react";

const Base = ({ authComponent, backgroundImage }) => {
  return (
    <div className="relative h-screen overflow-hidden flex">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover w-screen h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Right Split with Login Form */}
      <div className="fixed flex-1 flex items-center justify-center relative z-10">
        {authComponent}
      </div>
    </div>
  );
};

export default Base;
