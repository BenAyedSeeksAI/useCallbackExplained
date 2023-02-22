import React from "react";

const Title = () => {
  console.log("Title executed");
  return (
    <div>
      <h1>This is an example</h1>
    </div>
  );
};
export default React.memo(Title);
