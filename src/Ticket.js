import React, { useEffect } from "react";
import TicketArray from "./TicketArray";

const Ticket = ({ ticket }) => {
  useEffect(() => {
    // Iterate over the ticket object and print the key (not the value)
    Object.keys(ticket).forEach((key) => {
      console.log(key);
    });
  }, [ticket]);

  return (
    <div className="ticket">
      {Object.keys(ticket).map((key) => (
        <div className="flex-col">
          <h4 className="ticketh4">{key}</h4>
          <TicketArray arr={ticket[key]} />
        </div>
      ))}
    </div>
  );
};

export default Ticket;
