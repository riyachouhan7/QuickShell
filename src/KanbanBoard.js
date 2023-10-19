import React, { useState, useEffect } from "react";
import Ticket from "./Ticket";

function KanbanBoard({ tickets, sortingOption, groupingOption }) {
  const [groupedTickets, setGroupedTickets] = useState({});

  const groupTickets = async () => {
    switch (groupingOption) {
      case "User":
        var len = tickets.tickets.length || 0;
        var groupedData = {};
        var data = tickets.tickets;
        for (var i = 0; i < len; i++) {
          var user = data[i].userId;
          if (!groupedData[user]) {
            groupedData[user] = [];
          }
          groupedData[user].push(data[i]);
        }
        setGroupedTickets(groupedData);
        break;
      case "Status":
        var len = tickets.tickets.length || 0;
        var groupedData = {};
        var data = tickets.tickets;
        groupedData["Ideas"] = [];
        for (var i = 0; i < len; i++) {
          var status = data[i].status;
          if (!groupedData[status]) {
            groupedData[status] = [];
          }
          groupedData[status].push(data[i]);
        }
        groupedData["Cancelled"] = [];
        setGroupedTickets(groupedData);
        break;
      case "Priority":
        var len = tickets.tickets.length || 0;
        var groupedData = {};
        var data = tickets.tickets;
        for (var i = 0; i < len; i++) {
          var priority = data[i].priority;
          if (priority === 1) priority = "Low";
          else if (priority === 2) priority = "Medium";
          else if (priority === 3) priority = "High";
          else if (priority === 4) priority = "Urgent";
          else if (priority === 0) priority = "No Priority";
          if (!groupedData[priority]) {
            groupedData[priority] = [];
          }
          groupedData[priority].push(data[i]);
        }
        //change the key to [key groupedData[key].length]

        break;
      default:
        groupedData = { "All Tickets": tickets };
        break;
    }
    if (sortingOption === "Title") {
      for (const group in groupedData) {
        groupedData[group].sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      }
    }
    setGroupedTickets(groupedData);
  };

  useEffect(() => {
    groupTickets();
  }, [tickets, groupingOption, sortingOption]);

  useEffect(() => {}, [groupedTickets]);

  return (
    <div>
      <Ticket ticket={groupedTickets} />
    </div>
  );
}

export default KanbanBoard;
