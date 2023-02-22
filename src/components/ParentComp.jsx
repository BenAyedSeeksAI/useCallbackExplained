import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const ParentComp = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(2500);

  const handleIncrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, [age]);
  const handleIncrementSalary = useCallback(() => {
    setSalary((prevSalary) => prevSalary + 1000);
  }, [salary]);

  return (
    <>
      <Title />
      <Count label="age" value={age} />
      <Button label="age" onClick={handleIncrementAge}></Button>
      <Count label="salary" value={salary} />
      <Button label="salary" onClick={handleIncrementSalary}></Button>
    </>
  );
};
export default ParentComp;
