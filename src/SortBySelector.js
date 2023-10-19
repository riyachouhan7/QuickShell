import React, { useState } from "react";

const GroupBySelector = ({ setSortingOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("Priority");

  const handleGroupingChange = (event) => {
    setCurrentStatus(event);
    setIsDropdownOpen(false);
    setSortingOption(event);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="group-by-selector">
      <div className="dropdown">
        Sorting :
        <label tabIndex={0} className="" onClick={toggleDropdown}>
          {` ${currentStatus} `}
        </label>
        {isDropdownOpen && (
          <ul tabIndex={0} className="dropdown-content">
            <li>
              <a onClick={() => handleGroupingChange("Priority")}>Priority</a>
            </li>
            <li>
              <a onClick={() => handleGroupingChange("Title")}>Title</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default GroupBySelector;
