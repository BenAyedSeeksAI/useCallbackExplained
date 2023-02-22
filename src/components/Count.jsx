import React from "react";

const Count = ({ label, value }) => {
  console.log(`Count of ${label} executed`);
  return (
    <div>
      <h6>
        {label} : {value}
      </h6>
    </div>
  );
};
export default React.memo(Count);
