import React from "react";

const Button = ({ label, onClick }) => {
  console.log(`Button ${label} executed`);
  return <button onClick={onClick}>{label}</button>;
};
export default React.memo(Button);
