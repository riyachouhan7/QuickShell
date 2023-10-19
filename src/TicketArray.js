import React, { useEffect } from "react";

const TicketArray = ({ arr }) => {
  useEffect(() => {
    console.log(arr);
  }, [arr]);

  return (
    <div>
      {arr.map((item, index) => (
        <div className="card" key={index}>
          <h3 className="userId">{item.userId}</h3>
          <h5 className="title">{item.title}</h5>
          {item.tag.map((tag, tagIndex) => (
            <p className="tag" key={tagIndex}>
              {tag}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TicketArray;
