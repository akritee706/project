import React from "react";

interface HeaderProps {
  text: string;
}

// Re-usable Header component that takes header text to render
const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <>
      <div className="h-14 flex items-center justify-center bg-[#75A47F] text-white font-bold">
        {text}
      </div>
    </>
  );
};

export default Header;
