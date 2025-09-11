import React from "react";

interface TitleBarProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

const TitleBar = ({ title, subtitle, action, className = "" }: TitleBarProps) => {
  return (
    <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-gray-200 dark:border-gray-700 mb-6 ${className}`}>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
      </div>
      {action && <div className="mt-3 sm:mt-0">{action}</div>}
    </div>
  );
};

export default TitleBar;