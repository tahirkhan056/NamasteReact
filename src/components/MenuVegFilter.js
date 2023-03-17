import React from "react";

const MenuVegFilter = ({ data, onfilter }) => {
  if (data?.isPureVeg) {
    return (
      <div className="mt-8 pb-4 bg-white border-b">
        <span>🌱 Pure Veg</span>
      </div>
    );
  }
  return (
    <div className="mt-8 bg-white border-b">
      <label className="text-sm font-semibold text-[#3d4152] mr-5 relative -top-1">
        Veg Only
      </label>
      <label className="relative inline-flex items-center mb-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={(e) => onfilter(e)}
        />
        <div className="outline-none w-9 h-5 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-sm peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-sm after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
      </label>
    </div>
  );
};

export default MenuVegFilter;
