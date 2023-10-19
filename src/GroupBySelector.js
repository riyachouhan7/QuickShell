import React, { useState } from "react";

const GroupBySelector = ({ setGroupingOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("Status");

  const handleGroupingChange = (event) => {
    setCurrentStatus(event);
    setGroupingOption(event);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="group-by-selector">
      <div className="dropdown">
        Grouping :
        <label tabIndex={0} className="" onClick={toggleDropdown}>
          {` ${currentStatus} `}
        </label>
        {isDropdownOpen && (
          <ul tabIndex={0} className="dropdown-content">
            <li>
              <a onClick={() => handleGroupingChange("Status")}>Status</a>
            </li>
            <li>
              <a onClick={() => handleGroupingChange("User")}>User</a>
            </li>
            <li>
              <a onClick={() => handleGroupingChange("Priority")}>Priority</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default GroupBySelector;
