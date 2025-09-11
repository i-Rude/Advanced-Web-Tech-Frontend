import React from "react";

interface HeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const Header = ({ title, description, className = "" }: HeaderProps) => {
  return (
    <div className={`py-10 text-center ${className}`}>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">{title}</h1>
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default Header;