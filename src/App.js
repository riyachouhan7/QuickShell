"use client";
import React, { useState, useEffect } from "react";
import KanbanBoard from "./KanbanBoard";
import GroupBySelector from "./GroupBySelector";
import SortBySelector from "./SortBySelector";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState("Status");
  const [sortingOption, setSortingOption] = useState("Priority");
  useEffect(() => {
    console.log(groupingOption, sortingOption);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <h1 className="Home-Title">Kanban App</h1>
      <div className="home-body">
        <GroupBySelector setGroupingOption={setGroupingOption} />
        <SortBySelector setSortingOption={setSortingOption} />
        <KanbanBoard
          tickets={tickets}
          groupingOption={groupingOption}
          sortingOption={sortingOption}
        />
      </div>
    </div>
  );
};

export default App;
